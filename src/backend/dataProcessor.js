const fs = require('fs');
const csv = require('csv-parser');
const { MAPA_CATEGORIAS_NORMALIZADAS } = require('./constants');

function normalizarCabecalho(chave) {
    return String(chave || '')
        .replace(/[\r\n]+/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/\s+\?/g, '?')
        .replace(/\s+,/g, ',')
        .trim();
}

function extrairCampoPorNome(linha, nomesParciais = []) {
    const entries = Object.entries(linha || {});
    for (const [chave, valor] of entries) {
        const chaveLower = String(chave).toLowerCase();
        if (nomesParciais.some((nome) => chaveLower.includes(nome))) {
            return valor;
        }
    }
    return '';
}

function extrairCampoPorPredicado(linha, predicado) {
    for (const [chave, valor] of Object.entries(linha || {})) {
        if (predicado(String(chave).toLowerCase())) {
            return valor;
        }
    }
    return '';
}

function normalizarTexto(texto) {
    if (!texto) return "";
    let limpo = texto.toString()
        .replace(/^\s*[\wÀ-ÿ]+\s*[-.]\s*/, "")
        .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        .trim().toLowerCase();
    
    return MAPA_CATEGORIAS_NORMALIZADAS[limpo] || texto;
}

async function carregarBase(caminho, tipo) {
    return new Promise((resolve, reject) => {
        const resultados = [];
        const readStream = fs.createReadStream(caminho);
        const parser = csv({ separator: ',' });

        readStream.on('error', (err) => reject(err));

        readStream
            .pipe(parser)
            .on('data', (data) => {
                const linha = {};

                for (const [chave, valor] of Object.entries(data || {})) {
                    linha[normalizarCabecalho(chave)] = valor;
                }
                
                if (tipo === 'discentes') {
                    const cursoDiscente = extrairCampoPorPredicado(linha, (k) => k.startsWith('curso do discente'));
                    if (cursoDiscente && String(cursoDiscente).includes(' - ')) {
                        linha['curso'] = String(cursoDiscente).split(' - ')[0].trim() || 'Geral';
                        linha['campus'] = String(cursoDiscente).split(' - ')[1]?.trim() || 'Geral';
                    } else {
                        linha['curso'] = cursoDiscente ? String(cursoDiscente).trim() : 'Geral';
                        linha['campus'] = extrairCampoPorPredicado(linha, (k) => k.includes('campus')) || 'Geral';
                    }
                }

                if (tipo === 'docentes') {
                    linha['campus'] = (extrairCampoPorPredicado(linha, (k) => k === 'campus alocado' || k.startsWith('campus alocado')) || 'Geral').toString().trim();
                    linha['curso'] = (extrairCampoPorPredicado(linha, (k) => k.startsWith('curso alocado')) || 'Geral').toString().trim();
                }

                if (tipo === 'tecnicos') {
                    linha['campus'] = (extrairCampoPorPredicado(linha, (k) => k.includes('campus')) || 'Geral').toString().trim();
                    linha['curso'] = (extrairCampoPorPredicado(linha, (k) => k.startsWith('curso alocado')) || 'Geral').toString().trim() || 'Geral';
                }
                
                for (let chave in linha) {
                    if (/^\d+\./.test(chave)) {
                        linha[chave] = normalizarTexto(linha[chave]);
                    }
                }
                resultados.push(linha);
            })
            .on('end', () => resolve(resultados))
            .on('error', (err) => reject(err));
    });
}

function calcularFrequencia(dados, pergunta, filtros) {
    let filtrados = dados;
    
    if (filtros.campus && filtros.campus !== 'Geral') {
        filtrados = filtrados.filter(d => d.campus === filtros.campus);
    }
    if (filtros.curso && filtros.curso !== 'Todos os cursos' && filtros.curso !== 'Geral') {
        filtrados = filtrados.filter(d => d.curso === filtros.curso);
    }

    const contagem = {};
    filtrados.forEach(d => {
        let resp = d[pergunta] || 'Não respondido';
        contagem[resp] = (contagem[resp] || 0) + 1;
    });

    return Object.keys(contagem).map(k => ({ resposta: k, quantidade: contagem[k] }));
}

const MAPA_SCORES = {
    "Ótimo": 5,
    "Bom": 4,
    "Regular": 3,
    "Fraco": 2,
    "Insuficiente": 1,
    "Indisponível": 0,
    "Não sei avaliar": -1
};

const ORDEM_CONCEITOS_JS = [
    "Ótimo",
    "Bom",
    "Regular",
    "Fraco",
    "Insuficiente",
    "Indisponível",
    "Não sei avaliar",
];

function classificarIndicadorAprovacao(valor) {
    if (valor < 50) return "Fragilidade";
    if (valor <= 70) return "Ponto a melhorar";
    return "Potencialidade";
}

function calcularEstatisticas(frequencias) {
    const frequenciasOrdenadas = ORDEM_CONCEITOS_JS.map(conceito => 
        frequencias.find(f => f.resposta === conceito) || { resposta: conceito, quantidade: 0 }
    );

    const totalN = frequenciasOrdenadas.reduce((sum, f) => sum + f.quantidade, 0);
    
    let frequenciaAcumulada = 0;
    const distribuicao = frequenciasOrdenadas.map(f => {
        const fi = f.quantidade;
        frequenciaAcumulada += fi;
        const frPercent = ((fi / totalN) * 100).toFixed(2);
        const farPercent = ((frequenciaAcumulada / totalN) * 100).toFixed(2);
        
        return {
            conceito: f.resposta,
            fi: fi,
            frPercent: `${frPercent}%`,
            Fi: frequenciaAcumulada,
            FiPercent: `${farPercent}%`
        };
    });

    distribuicao.push({
        conceito: "TOTAL",
        fi: totalN,
        frPercent: "100.00%",
        Fi: "—",
        FiPercent: "—"
    });

    const frequenciasValidas = frequenciasOrdenadas
        .map(f => ({
            resposta: f.resposta,
            quantidade: f.quantidade,
            xi: MAPA_SCORES[f.resposta]
        }))
        .filter(f => f.xi >= 0);

    const nValidos = frequenciasValidas.reduce((sum, f) => sum + f.quantidade, 0);

    if (nValidos <= 1) {
        return {
            distribuicao,
            estatisticas: [
                { medida: "Moda", resultado: "N/A" },
                { medida: "Média", resultado: "N/A" },
                { medida: "Mediana", resultado: "N/A" },
                { medida: "Variância", resultado: "N/A" },
                { medida: "Desvio Padrão", resultado: "N/A" },
                { medida: "Coeficiente de Variação", resultado: "N/A" },
                { medida: "Índice de Aprovação", resultado: "N/A" },
                { medida: "Indicador de Aprovação", resultado: "N/A" }
            ]
        };
    }

    const modaObj = frequenciasValidas.reduce((max, f) => 
        f.quantidade > max.quantidade ? f : max
    );
    const moda = modaObj.xi;

    const somaXiFi = frequenciasValidas.reduce((sum, f) => sum + (f.xi * f.quantidade), 0);
    const media = somaXiFi / nValidos;

    let mediana;
    const frequenciasAcum = [];
    let acum = 0;
    frequenciasValidas.forEach(f => {
        acum += f.quantidade;
        frequenciasAcum.push({ xi: f.xi, fa: acum });
    });

    if (nValidos % 2 !== 0) {
        const pos = (nValidos + 1) / 2;
        mediana = frequenciasAcum.find(f => f.fa >= pos)?.xi;
    } else {
        const pos1 = nValidos / 2;
        const pos2 = (nValidos / 2) + 1;
        const val1 = frequenciasAcum.find(f => f.fa >= pos1)?.xi;
        const val2 = frequenciasAcum.find(f => f.fa >= pos2)?.xi;
        mediana = (val1 + val2) / 2;
    }

    const somaDesvioQuadrado = frequenciasValidas.reduce((sum, f) => {
        return sum + (f.quantidade * Math.pow(f.xi - media, 2));
    }, 0);
    const variancia = somaDesvioQuadrado / (nValidos - 1);

    const desviaoPadrao = Math.sqrt(variancia);

    const coeficienteVariacao = media > 0 ? ((desviaoPadrao / media) * 100) : 0;

    const aprovados = frequenciasValidas
        .filter(f => f.xi === 4 || f.xi === 5)
        .reduce((sum, f) => sum + f.quantidade, 0);
    const indiceAprovacao = (aprovados / nValidos) * 100;

    const indicadorAprovacao = classificarIndicadorAprovacao(indiceAprovacao);

    const estatisticas = [
        { medida: "Moda", resultado: String(moda) },
        { medida: "Média", resultado: media.toFixed(2) },
        { medida: "Mediana", resultado: String(Math.round(mediana)) },
        { medida: "Variância", resultado: variancia.toFixed(2) },
        { medida: "Desvio Padrão", resultado: desviaoPadrao.toFixed(2) },
        { medida: "Coeficiente de Variação", resultado: `${coeficienteVariacao.toFixed(2)}%` },
        { medida: "Índice de Aprovação", resultado: `${indiceAprovacao.toFixed(2)}%` },
        { medida: "Indicador de Aprovação", resultado: indicadorAprovacao }
    ];

    return { distribuicao, estatisticas };
}

module.exports = { carregarBase, calcularFrequencia, calcularEstatisticas };