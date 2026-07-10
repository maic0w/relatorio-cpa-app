
// ==========================================
// 1. ESTADO DA APLICAÇÃO
// ==========================================

const appState = {
    constants: null,
    dados: {
        discentes: [],
        docentes: [],
        tecnicos: [],
    },
};

const CATEGORIAS_COM_PERGUNTAS = ["Discentes", "Docentes", "Técnicos Administrativos"];
const SUBCATEGORIAS_CAMPUS = ["Geral", "Discentes", "Docentes", "Técnicos Administrativos"];

const FALLBACK_CONSTANTS = {
    CATEGORIAS: ["Discentes", "Docentes", "Técnicos Administrativos", "Campus", "Cursos"],
    FUNCOES: ["Discentes", "Docentes", "Técnicos Administrativos"],
    CAMPI: ["Aracaju", "Estância", "Glória", "Itabaiana", "Lagarto", "Propriá", "São Cristóvão"],
    CURSOS_POR_CAMPUS: {
        Aracaju: ["Análise e Desenvolvimento de Sistemas", "Engenharia Civil", "Gestão em Turismo", "Matemática", "Química", "Saneamento Ambiental"],
        Estância: ["Engenharia Civil"],
        Glória: ["Tecnologia em Laticínios"],
        Itabaiana: ["Tecnologia em Agroecologia", "Ciência da Computação", "Tecnologia em Logística"],
        Lagarto: ["Arquitetura e Urbanismo", "Engenharia Elétrica", "Física", "Sistemas de Informação"],
        Propriá: ["Gestão de Tecnologia da Informação"],
        "São Cristóvão": ["Licenciatura em Ciências Biológicas", "Tecnologia em Agroecologia", "Tecnologia em Alimentos"],
    },
    ORDEM_CONCEITOS: ["Ótimo", "Bom", "Regular", "Fraco", "Insuficiente", "Indisponível", "Não sei avaliar"],
    PERGUNTAS_DISCENTES: [],
    PERGUNTAS_DOCENTES: [],
    PERGUNTAS_TECNICOS: [],
};

const ENQUADRAMENTO_CPA = {
    Discentes: [
        { eixo: 'Eixo 2: Desenvolvimento Institucional', dimensao: 'Dimensão 1: Missão e Plano de Desenvolvimento Institucional (PDI)' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 6: Organização e Gestão da Instituição' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 6: Organização e Gestão da Instituição' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 6: Organização e Gestão da Instituição' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 6: Organização e Gestão da Instituição' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 6: Organização e Gestão da Instituição' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 2: Políticas para o Ensino, a Pesquisa e a Extensão' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 2: Políticas para o Ensino, a Pesquisa e a Extensão' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 5: Políticas de Pessoal' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 9: Política de Atendimento aos Discentes' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 9: Política de Atendimento aos Discentes' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 2: Políticas para o Ensino, a Pesquisa e a Extensão' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 2: Políticas para o Ensino, a Pesquisa e a Extensão' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 4: Comunicação com a Sociedade' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 4: Comunicação com a Sociedade' },
        { eixo: 'Eixo 2: Desenvolvimento Institucional', dimensao: 'Dimensão 3: Responsabilidade Social da Instituição' },
        { eixo: 'Eixo 2: Desenvolvimento Institucional', dimensao: 'Dimensão 3: Responsabilidade Social da Instituição' },
        { eixo: 'Eixo 1: Planejamento e Avaliação Institucional', dimensao: 'Dimensão 8: Planejamento e Avaliação' },
    ],
    Docentes: [
        { eixo: 'Eixo 2: Desenvolvimento Institucional', dimensao: 'Dimensão 1: Missão e Plano de Desenvolvimento Institucional (PDI)' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 6: Organização e Gestão da Instituição' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 6: Organização e Gestão da Instituição' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 6: Organização e Gestão da Instituição' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 6: Organização e Gestão da Instituição' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 2: Políticas para o Ensino, a Pesquisa e a Extensão' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 2: Políticas para o Ensino, a Pesquisa e a Extensão' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 2: Políticas para o Ensino, a Pesquisa e a Extensão' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 2: Políticas para o Ensino, a Pesquisa e a Extensão' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 5: Políticas de Pessoal' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 4: Comunicação com a Sociedade' },
        { eixo: 'Eixo 2: Desenvolvimento Institucional', dimensao: 'Dimensão 3: Responsabilidade Social da Instituição' },
        { eixo: 'Eixo 2: Desenvolvimento Institucional', dimensao: 'Dimensão 3: Responsabilidade Social da Instituição' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 1: Planejamento e Avaliação Institucional', dimensao: 'Dimensão 8: Planejamento e Avaliação' },
        { eixo: 'Eixo 1: Planejamento e Avaliação Institucional', dimensao: 'Dimensão 8: Planejamento e Avaliação' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 10: Sustentabilidade Financeira' },
    ],
    'Técnicos Administrativos': [
        { eixo: 'Eixo 2: Desenvolvimento Institucional', dimensao: 'Dimensão 1: Missão e Plano de Desenvolvimento Institucional (PDI)' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 6: Organização e Gestão da Instituição' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 6: Organização e Gestão da Instituição' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 5: Políticas de Pessoal' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 5: Políticas de Pessoal' },
        { eixo: 'Eixo 3: Políticas Acadêmicas', dimensao: 'Dimensão 4: Comunicação com a Sociedade' },
        { eixo: 'Eixo 2: Desenvolvimento Institucional', dimensao: 'Dimensão 3: Responsabilidade Social da Instituição' },
        { eixo: 'Eixo 2: Desenvolvimento Institucional', dimensao: 'Dimensão 3: Responsabilidade Social da Instituição' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 5: Infraestrutura Física', dimensao: 'Dimensão 7: Infraestrutura Física' },
        { eixo: 'Eixo 1: Planejamento e Avaliação Institucional', dimensao: 'Dimensão 8: Planejamento e Avaliação' },
        { eixo: 'Eixo 1: Planejamento e Avaliação Institucional', dimensao: 'Dimensão 8: Planejamento e Avaliação' },
        { eixo: 'Eixo 4: Políticas de Gestão', dimensao: 'Dimensão 10: Sustentabilidade Financeira' },
    ],
};

// ==========================================
// 2. ELEMENTOS DO DOM
// ==========================================

const DOM = {
    themeToggle: document.getElementById('themeToggle'),
    themeLabel: document.getElementById('themeLabel'),
    sidebar: document.getElementById('sidebar'),
    sidebarToggle: document.getElementById('sidebarToggle'),

    // Filtros
    selectCategoria: document.getElementById('selectCategoria'),
    selectCampus: document.getElementById('selectCampus'),
    selectCurso: document.getElementById('selectCurso'),
    cursoBadge: document.getElementById('cursoBadge'),
    selectPergunta: document.getElementById('selectPergunta'),
    labelPergunta: document.querySelector('label[for="selectPergunta"]'),

    // Botões
    btnAplicar: document.getElementById('btnAplicar'),
    btnDownloadPng: document.getElementById('btnDownloadPng'),
    btnExportZipRelatorio: document.getElementById('btnExportZipRelatorio'),
    btnExportZipGraficos: document.getElementById('btnExportZipGraficos'),

    // Áreas
    emptyState: document.getElementById('emptyState'),
    reportWrapper: document.getElementById('reportWrapper'),
    reportCard: document.getElementById('reportCard'),

    // Elementos Internos do Relatório
    bcCategoria: document.getElementById('bcCategoria'),
    bcCampus: document.getElementById('bcCampus'),
    bcCurso: document.getElementById('bcCurso'),
    reportTitle: document.getElementById('reportTitle'),
    metaRespondentes: document.getElementById('metaRespondentes'),
    distributionTableBody: document.getElementById('distributionTableBody'),
    statsBody: document.getElementById('statsBody'),
    footerDate: document.getElementById('footerDate'),

    // Textarea
    analysisTextarea: document.getElementById('analysisTextarea'),
    charCount: document.getElementById('charCount'),

    // Utilitários
    toastContainer: document.getElementById('toastContainer'),
    globalLoader: document.getElementById('globalLoader'),
    loaderText: document.getElementById('loaderText')
};

// ==========================================
// 3. INICIALIZAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    setupEventListeners();
    criarBotaoSidebarFlutuante();
    // 'Gerenciar Dados' is now attached to the existing 'Exportar gráficos' button.

    // Preenche a data de hoje no rodapé
    DOM.footerDate.textContent = new Date().toLocaleDateString('pt-BR');

    await inicializarDadosEControles();
});

function setupEventListeners() {
    DOM.themeToggle?.addEventListener('click', toggleTheme);
    DOM.sidebarToggle?.addEventListener('click', () => toggleSidebar(false));

    // Lógica de Filtros Dependentes
    DOM.selectCategoria?.addEventListener('change', aoAlterarCategoria);
    DOM.selectCampus?.addEventListener('change', atualizarDropdownCursos);
    DOM.selectPergunta?.addEventListener('change', atualizarComentarioPadraoCPA);

    // Textarea Contagem
    DOM.analysisTextarea?.addEventListener('focus', preencherComentarioPadraoAoFocar);
    DOM.analysisTextarea?.addEventListener('click', preencherComentarioPadraoAoFocar);
    DOM.analysisTextarea?.addEventListener('input', () => {
        marcarEstadoComentarioAutomatico();
        atualizarContadorCaracteres();
    });

    // Ações Principais
    DOM.btnAplicar?.addEventListener('click', gerarRelatorio);
    DOM.btnDownloadPng?.addEventListener('click', baixarRelatorioPNG);

    // Exportações em Lote
    DOM.btnExportZipRelatorio?.addEventListener('click', async () => {
        try {
            await exportarRelatoriosParaPastas();
        } catch (error) {
            console.error(error);
            showToast(error.message || 'Erro ao exportar relatórios.', 'error');
        }
    });
    DOM.btnExportZipGraficos?.addEventListener('click', async () => {
        try {
            await selecionarEGerenciarDados();
        } catch (error) {
            console.error('Erro ao abrir gerenciador de dados:', error);
            showToast(error.message || 'Erro ao gerenciar dados.', 'error');
        }
    });
}

async function inicializarDadosEControles() {
    await inicializarConstantesUI();
    const carregouUsuario = await carregarDadosUsuario();
    if (!carregouUsuario) {
        await solicitarPastaDadosInicial();
    }
}

async function solicitarPastaDadosInicial() {
    showToast('Primeiro acesso: selecione a pasta com os CSVs no Gerenciar Dados.', 'info');

    const selecionou = await selecionarEGerenciarDados({
        primeiraExecucao: true,
        mostrarToastSucesso: true,
    });

    if (!selecionou) {
        showToast('Nenhuma pasta de dados configurada. Selecione em "Gerenciar Dados" para carregar os CSVs.', 'warn');
    }
}

// ==========================
// Gerenciamento de arquivos de dados pelo usuário
// ==========================
async function carregarDadosUsuario() {
    try {
        const mapping = obterMappingDadosSalvo();
        console.log('[DADOS DEBUG] Mapping salvo carregado:', mapping);
        if (!mapping.discentes && !mapping.docentes && !mapping.tecnicos) return false;
        const promises = [];

        if (mapping.discentes) {
            promises.push(window.api.carregarDados(mapping.discentes, 'discentes').then(r => {
                appState.dados.discentes = Array.isArray(r) ? r : [];
                console.log('[DADOS DEBUG] Discentes carregado(s):', appState.dados.discentes.length, 'arquivo:', mapping.discentes);
            }));
        }
        if (mapping.docentes) {
            promises.push(window.api.carregarDados(mapping.docentes, 'docentes').then(r => {
                appState.dados.docentes = Array.isArray(r) ? r : [];
                console.log('[DADOS DEBUG] Docentes carregado(s):', appState.dados.docentes.length, 'arquivo:', mapping.docentes);
            }));
        }
        if (mapping.tecnicos) {
            promises.push(window.api.carregarDados(mapping.tecnicos, 'tecnicos').then(r => {
                appState.dados.tecnicos = Array.isArray(r) ? r : [];
                console.log('[DADOS DEBUG] Técnicos carregado(s):', appState.dados.tecnicos.length, 'arquivo:', mapping.tecnicos);
            }));
        }

        if (!promises.length) return false;

        await Promise.all(promises);
        showToast('Bases de dados do usuário carregadas.', 'success');
        return true;
    } catch (e) {
        console.error('Erro ao carregar dados do usuário:', e);
        return false;
    }
}

function obterMappingDadosSalvo() {
    try {
        const raw = localStorage.getItem('cpa_data_paths');
        if (!raw) return {};

        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
            return {};
        }

        return parsed;
    } catch {
        localStorage.removeItem('cpa_data_paths');
        return {};
    }
}

function criarBotaoGerenciarDados() {
    const existing = document.getElementById('btnGerenciarDados');
    if (existing) return;

    const btn = document.createElement('button');
    btn.id = 'btnGerenciarDados';
    btn.className = 'btn btn--secondary';
    btn.title = 'Gerenciar arquivos de dados (CSV)';
    btn.textContent = 'Gerenciar Dados';
    btn.style.position = 'fixed';
    btn.style.right = '16px';
    btn.style.bottom = '80px';
    btn.style.zIndex = '9999';
    btn.addEventListener('click', selecionarEGerenciarDados);
    document.body.appendChild(btn);
}

async function selecionarEGerenciarDados(opcoes = {}) {
    const { primeiraExecucao = false, mostrarToastSucesso = true } = opcoes;

    try {
        console.log('[DADOS DEBUG] Iniciando seleção/gerenciamento de dados...');
        const resultado = await window.api.selecionarArquivosDados();
        console.log('[DADOS DEBUG] Retorno selecionarArquivosDados:', resultado);
        if (!resultado || resultado.canceled) return false;

        if (resultado.error) {
            throw new Error(resultado.error);
        }

        if (!Array.isArray(resultado.filePaths) || !resultado.filePaths.length) {
            showToast(
                primeiraExecucao
                    ? 'A pasta selecionada está vazia ou sem CSV. Nenhum dado foi carregado.'
                    : 'A pasta selecionada não possui arquivos CSV. Caminho atual mantido.',
                'warn'
            );
            return false;
        }

        const mapping = resultado.mapping || {};
        console.log('[DADOS DEBUG] Novo mapping selecionado:', mapping);

        const possuiAlgumMapeamento = Boolean(mapping.discentes || mapping.docentes || mapping.tecnicos);
        if (!possuiAlgumMapeamento) {
            showToast('Nenhum CSV compatível foi identificado. Use nomes contendo disc/doc/tec.', 'warn');
            return false;
        }

        if (!mapping.discentes || !mapping.docentes || !mapping.tecnicos) {
            console.warn('[DADOS DEBUG] Mapping incompleto:', mapping);
            showToast('Não foi possível mapear todos os tipos. Use nomes contendo disc/doc/tec nos CSVs.', 'warn');
        }

        // Persist mapping substituindo completamente o caminho anterior.
        localStorage.setItem('cpa_data_paths', JSON.stringify(mapping));
        console.log('[DADOS DEBUG] Mapping persistido com sucesso.');

        // Limpa estado atual e recarrega dados usando os novos arquivos selecionados.
        appState.dados.discentes = [];
        appState.dados.docentes = [];
        appState.dados.tecnicos = [];

        await carregarDadosUsuario();

        if (mostrarToastSucesso) {
            showToast(`Pasta de dados carregada: ${resultado.folderPath || 'selecionada'}`, 'success');
        }

        return true;
    } catch (e) {
        console.error('Erro ao selecionar/gerenciar dados:', e);
        showToast(`Erro ao carregar pasta: ${e.message || 'erro desconhecido'}`, 'error');
        return false;
    }
}

async function inicializarConstantesUI() {
    try {
        const backendConstants = await window.api?.obterConstantes?.();
        appState.constants = backendConstants || FALLBACK_CONSTANTS;
    } catch (error) {
        console.error('Erro ao carregar constantes do backend:', error);
        appState.constants = FALLBACK_CONSTANTS;
        showToast('Usando constantes locais (fallback).', 'warn');
    }

    try {
        popularCategorias();
        popularCampi();
        aoAlterarCategoria();
        showToast('Categorias e filtros carregados.', 'success');
    } catch (error) {
        console.error('Erro ao montar filtros iniciais:', error);
        showToast('Falha ao montar filtros iniciais.', 'error');
    }
}

async function carregarBasesDados() {
    try {
        const [discentes, docentes, tecnicos] = await Promise.all([
            window.api?.carregarDados?.('data_discente.csv', 'discentes'),
            window.api?.carregarDados?.('data_docente.csv', 'docentes'),
            window.api?.carregarDados?.('data_tec_adm.csv', 'tecnicos'),
        ]);

        appState.dados.discentes = Array.isArray(discentes) ? discentes : [];
        appState.dados.docentes = Array.isArray(docentes) ? docentes : [];
        appState.dados.tecnicos = Array.isArray(tecnicos) ? tecnicos : [];

        const total = appState.dados.discentes.length + appState.dados.docentes.length + appState.dados.tecnicos.length;
        if (total > 0) {
            showToast('Bases de dados carregadas com sucesso.', 'success');
        } else {
            showToast('Nenhum CSV padrão encontrado. Use "Gerenciar Dados" para selecionar a pasta.', 'warn');
        }
    } catch (error) {
        console.error('Erro ao carregar bases de dados:', error);
        appState.dados.discentes = [];
        appState.dados.docentes = [];
        appState.dados.tecnicos = [];
        showToast('Falha ao carregar CSVs. Filtros continuam disponíveis.', 'warn');
    }
}

function popularSelect(select, valores, primeiraOpcao = '— Selecione —') {
    select.innerHTML = '';
    const optInicial = document.createElement('option');
    optInicial.value = '';
    optInicial.textContent = primeiraOpcao;
    select.appendChild(optInicial);

    valores.forEach((valor) => {
        const opt = document.createElement('option');
        opt.value = valor;
        opt.textContent = valor;
        select.appendChild(opt);
    });
}

function popularCategorias() {
    const categorias = appState.constants?.CATEGORIAS || [];
    popularSelect(DOM.selectCategoria, categorias);
}

function popularCampi() {
    const campi = appState.constants?.CAMPI || [];
    popularSelect(DOM.selectCampus, campi, '— Geral —');
}

function obterCampiComCursos() {
    const cursosPorCampus = appState.constants?.CURSOS_POR_CAMPUS || FALLBACK_CONSTANTS.CURSOS_POR_CAMPUS;
    return Object.keys(cursosPorCampus).sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

function atualizarVisibilidadeFiltrosEscopo() {
    const categoria = DOM.selectCategoria?.value || '';
    const grupoCampus = DOM.selectCampus?.closest('.filter-group');
    const grupoCurso = DOM.selectCurso?.closest('.filter-group');

    if (grupoCampus) {
        grupoCampus.hidden = categoria === 'Campus' || categoria === 'Cursos';
    }

    if (grupoCurso) {
        grupoCurso.hidden = categoria === 'Campus' || categoria === 'Cursos';
    }
}

function aoAlterarCategoria() {
    const categoria = DOM.selectCategoria?.value || '';

    if (categoria === 'Campus' || categoria === 'Cursos') {
        if (DOM.selectCampus) DOM.selectCampus.value = '';
        if (DOM.selectCurso) DOM.selectCurso.value = '';
    }

    atualizarVisibilidadeFiltrosEscopo();
    atualizarDropdownCursos();
    atualizarControlePerguntaOuSubcategoria();
}

function atualizarControlePerguntaOuSubcategoria() {
    if (!DOM.selectPergunta || !DOM.labelPergunta) return;

    const categoria = DOM.selectCategoria?.value || '';
    const constantes = appState.constants || FALLBACK_CONSTANTS;
    let opcoes = [];
    let labelTexto = 'Pergunta';

    if (categoria === 'Discentes') {
        opcoes = constantes.PERGUNTAS_DISCENTES || [];
    } else if (categoria === 'Docentes') {
        opcoes = constantes.PERGUNTAS_DOCENTES || [];
    } else if (categoria === 'Técnicos Administrativos') {
        opcoes = constantes.PERGUNTAS_TECNICOS || [];
    } else if (categoria === 'Campus') {
        opcoes = SUBCATEGORIAS_CAMPUS;
        labelTexto = 'Subcategoria';
    } else if (categoria === 'Cursos') {
        opcoes = obterCampiComCursos();
        labelTexto = 'Campus';
    }

    DOM.labelPergunta.textContent = labelTexto;
    popularSelect(DOM.selectPergunta, opcoes, `— Selecione ${labelTexto.toLowerCase()} —`);

    if (categoria === 'Campus' && DOM.selectPergunta && DOM.selectPergunta.querySelector('option[value="Geral"]')) {
        DOM.selectPergunta.value = 'Geral';
    }

    if (!opcoes.length) {
        DOM.selectPergunta.innerHTML = '<option value="">— Selecione —</option>';
    }

    atualizarComentarioPadraoCPA();
}

function obterTextoComentarioCPA(categoria, pergunta) {
    if (!categoria || !pergunta) return 'Selecione uma pergunta para exibir o enquadramento no SINAES.';

    const enquadramento = ENQUADRAMENTO_CPA[categoria];
    if (!Array.isArray(enquadramento)) {
        return 'Selecione uma pergunta para exibir o enquadramento no SINAES.';
    }

    const constantes = appState.constants || FALLBACK_CONSTANTS;
    const listaPerguntas = categoria === 'Discentes'
        ? constantes.PERGUNTAS_DISCENTES
        : categoria === 'Docentes'
            ? constantes.PERGUNTAS_DOCENTES
            : categoria === 'Técnicos Administrativos'
                ? constantes.PERGUNTAS_TECNICOS
                : [];

    const indice = listaPerguntas.indexOf(pergunta);
    const enquadramentoSelecionado = indice >= 0 ? enquadramento[indice] : null;

    if (!enquadramentoSelecionado) {
        return 'Selecione uma pergunta para exibir o enquadramento no SINAES.';
    }

    return `Esta questão vincula-se ao ${enquadramentoSelecionado.eixo} e à ${enquadramentoSelecionado.dimensao} do SINAES.`;
}

function atualizarComentarioPadraoCPA() {
    if (!DOM.analysisTextarea) return;

    const categoria = DOM.selectCategoria?.value || '';
    const pergunta = DOM.selectPergunta?.value || '';
    const comentarioPadrao = obterTextoComentarioCPA(categoria, pergunta);
    const comentarioPadraoAnterior = DOM.analysisTextarea.dataset.comentarioPadraoAtual || '';
    const comentarioFoiAutoPreenchido = DOM.analysisTextarea.dataset.autoPreenchido === 'true';

    DOM.analysisTextarea.placeholder = comentarioPadrao;
    DOM.analysisTextarea.dataset.comentarioPadraoAtual = comentarioPadrao;

    // Mantém o texto sincronizado apenas quando ainda é o texto automático anterior.
    if (comentarioFoiAutoPreenchido && DOM.analysisTextarea.value === comentarioPadraoAnterior) {
        DOM.analysisTextarea.value = comentarioPadrao;
    }

    marcarEstadoComentarioAutomatico();
    atualizarContadorCaracteres();
}

function preencherComentarioPadraoAoFocar() {
    if (!DOM.analysisTextarea) return;

    if (DOM.analysisTextarea.value.trim()) {
        return;
    }

    const categoria = DOM.selectCategoria?.value || '';
    const pergunta = DOM.selectPergunta?.value || '';
    const comentarioPadrao = DOM.analysisTextarea.dataset.comentarioPadraoAtual || obterTextoComentarioCPA(categoria, pergunta);

    DOM.analysisTextarea.value = comentarioPadrao;
    DOM.analysisTextarea.dataset.comentarioPadraoAtual = comentarioPadrao;
    DOM.analysisTextarea.dataset.autoPreenchido = 'true';

    atualizarContadorCaracteres();
}

function marcarEstadoComentarioAutomatico() {
    if (!DOM.analysisTextarea) return;

    const comentarioPadrao = DOM.analysisTextarea.dataset.comentarioPadraoAtual || '';
    DOM.analysisTextarea.dataset.autoPreenchido = DOM.analysisTextarea.value === comentarioPadrao ? 'true' : 'false';
}

// ==========================================
// 4. UI E INTERAÇÕES
// ==========================================

function initTheme() {
    const savedTheme = localStorage.getItem('cpa-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (DOM.themeLabel) {
        DOM.themeLabel.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('cpa-theme', newTheme);
    if (DOM.themeLabel) {
        DOM.themeLabel.textContent = isDark ? 'Modo Escuro' : 'Modo Claro';
    }
    
    // Se o gráfico estiver visível, precisamos redesenhá-lo com as novas cores
    if (!DOM.reportWrapper.hidden) {
        atualizarCoresGraficoPlotly();
    }
}

function toggleSidebar(open) {
    if (open) {
        DOM.sidebar.classList.remove('is-collapsed');
        document.getElementById('fabSidebar').classList.remove('is-visible');
    } else {
        DOM.sidebar.classList.add('is-collapsed');
        document.getElementById('fabSidebar').classList.add('is-visible');
    }
}

function criarBotaoSidebarFlutuante() {
    // Cria o botão flutuante para reabrir a sidebar caso ela seja fechada
    const fab = document.createElement('button');
    fab.id = 'fabSidebar';
    fab.className = 'sidebar-open-fab';
    fab.title = "Expandir painel de filtros";
    fab.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
    fab.addEventListener('click', () => toggleSidebar(true));
    document.body.appendChild(fab);
}

function atualizarContadorCaracteres() {
    if (!DOM.analysisTextarea || !DOM.charCount) return;
    const len = DOM.analysisTextarea.value.length;
    const max = DOM.analysisTextarea.getAttribute('maxlength');
    DOM.charCount.textContent = `${len} / ${max}`;
    
    if (len >= max) {
        DOM.charCount.className = 'analysis__char-count is-at-limit';
    } else if (len >= max * 0.9) {
        DOM.charCount.className = 'analysis__char-count is-near-limit';
    } else {
        DOM.charCount.className = 'analysis__char-count';
    }
}

function showToast(message, type = 'info') {
    if (!DOM.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    
    let icon = '';
    if (type === 'success') icon = `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`;
    else if (type === 'error') icon = `<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>`;
    else if (type === 'warn') icon = `<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`;
    else icon = `<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>`;

    toast.innerHTML = `
        <div class="toast__icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icon}</svg>
        </div>
        <div class="toast__content">
            <div class="toast__msg">${message}</div>
        </div>
    `;

    DOM.toastContainer.appendChild(toast);
    
    // Auto remover
    setTimeout(() => {
        toast.classList.add('is-leaving');
        toast.addEventListener('animationend', () => toast.remove());
    }, 4000);
}

function mostrarLoader(texto) {
    if (!DOM.globalLoader || !DOM.loaderText) return;
    DOM.loaderText.textContent = texto;
    DOM.globalLoader.hidden = false;
}

function esconderLoader() {
    if (!DOM.globalLoader) return;
    DOM.globalLoader.hidden = true;
}

function setExportButtonsDisabled(disabled) {
    if (DOM.btnExportZipRelatorio) DOM.btnExportZipRelatorio.disabled = disabled;
    if (DOM.btnExportZipGraficos) DOM.btnExportZipGraficos.disabled = disabled;
    if (DOM.btnDownloadPng) DOM.btnDownloadPng.disabled = disabled;
    if (DOM.btnAplicar) DOM.btnAplicar.disabled = disabled;
}

function sanitizarNomeArquivo(texto) {
    return String(texto || 'arquivo')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[/\\?%*:|"<>]/g, '')
        .replace(/\s+/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '');
}

function converterDataUrlParaBase64(dataUrl) {
    return String(dataUrl || '').split(',')[1] || '';
}

function obterConstantesUI() {
    return appState.constants || FALLBACK_CONSTANTS;
}

function obterTodosCombosCampusCurso() {
    const constantes = obterConstantesUI();
    const campi = constantes.CAMPI || [];
    const cursosPorCampus = constantes.CURSOS_POR_CAMPUS || {};
    const combos = [{ campus: 'Geral', curso: 'Geral' }];

    campi.forEach((campus) => {
        combos.push({ campus, curso: 'Geral' });

        const cursos = cursosPorCampus[campus] || [];
        cursos.forEach((curso) => {
            combos.push({ campus, curso });
        });
    });

    return combos;
}

function obterDetalhesExportacaoCompleta() {
    const constantes = obterConstantesUI();
    return [
        {
            chave: 'Discentes',
            titulo: 'Discentes',
            tipo: 'perguntas',
            perguntas: constantes.PERGUNTAS_DISCENTES || [],
        },
        {
            chave: 'Docentes',
            titulo: 'Docentes',
            tipo: 'perguntas',
            perguntas: constantes.PERGUNTAS_DOCENTES || [],
        },
        {
            chave: 'Técnicos Administrativos',
            titulo: 'Técnicos Administrativos',
            tipo: 'perguntas',
            perguntas: constantes.PERGUNTAS_TECNICOS || [],
        },
        {
            chave: 'Campus',
            titulo: 'Campus',
            tipo: 'subcategorias',
            subcategorias: SUBCATEGORIAS_CAMPUS,
        },
        {
            chave: 'Cursos',
            titulo: 'Cursos',
            tipo: 'subcategorias',
            subcategorias: obterCampiComCursos(),
        },
    ];
}

function obterDadosPorSubcategoriaCampus(subcategoria) {
    if (subcategoria === 'Discentes') return appState.dados.discentes;
    if (subcategoria === 'Docentes') return appState.dados.docentes;
    if (subcategoria === 'Técnicos Administrativos') return appState.dados.tecnicos;
    return [...appState.dados.discentes, ...appState.dados.docentes, ...appState.dados.tecnicos];
}

function montarNomePastaExportacaoCompleta(indiceCategoria, categoria) {
    return `${String(indiceCategoria).padStart(2, '0')}_${sanitizarNomeArquivo(categoria)}`;
}

function montarNomeArquivoExportacaoCompleta(tipo, indice, filtros = {}, sufixo = 'png') {
    const partes = [
        tipo,
        String(indice).padStart(2, '0'),
        filtros.campus && filtros.campus !== 'Geral' ? sanitizarNomeArquivo(filtros.campus) : 'Geral',
        filtros.curso && filtros.curso !== 'Geral' ? sanitizarNomeArquivo(filtros.curso) : 'Geral',
    ];

    return `${partes.join('__')}.${sufixo}`;
}

function montarNomeArquivoPngPorTitulo(titulo, indice = null) {
    const partes = [];
    if (indice !== null && indice !== undefined) {
        partes.push(String(indice).padStart(2, '0'));
    }
    partes.push(sanitizarNomeArquivo(titulo));
    return `${partes.filter(Boolean).join('__')}.png`;
}

function sanitizarFiltrosParaCategoria(categoria, filtros, dadosCategoria) {
    const filtrosSanitizados = { ...filtros };
    filtrosSanitizados.campus = filtros?.campus || 'Geral';
    filtrosSanitizados.curso = filtros?.curso || 'Geral';

    if (!Array.isArray(dadosCategoria) || !dadosCategoria.length) {
        filtrosSanitizados.campus = 'Geral';
        filtrosSanitizados.curso = 'Geral';
        return filtrosSanitizados;
    }

    if (categoria === 'Técnicos Administrativos') {
        filtrosSanitizados.curso = 'Geral';
    }

    const campusExiste = filtrosSanitizados.campus === 'Geral' || dadosCategoria.some((item) => (item.campus || 'Geral') === filtrosSanitizados.campus);
    if (!campusExiste) {
        filtrosSanitizados.campus = 'Geral';
        filtrosSanitizados.curso = 'Geral';
        return filtrosSanitizados;
    }

    if (filtrosSanitizados.curso !== 'Geral') {
        const cursoExiste = dadosCategoria.some((item) => {
            const campusItem = item.campus || 'Geral';
            const cursoItem = item.curso || 'Geral';
            const campusCompativel = filtrosSanitizados.campus === 'Geral' || campusItem === filtrosSanitizados.campus;
            return campusCompativel && cursoItem === filtrosSanitizados.curso;
        });

        if (!cursoExiste) {
            filtrosSanitizados.curso = 'Geral';
        }
    }

    return filtrosSanitizados;
}

async function construirRelatorio(filtros) {
    const categoria = filtros.categoria;
    const constantes = obterConstantesUI();
    const ordem = constantes.ORDEM_CONCEITOS || FALLBACK_CONSTANTS.ORDEM_CONCEITOS;

    let serie = [];
    let titulo = '';
    let eixoX = 'Quantidade de Respostas';
    let dadosCategoria = null;
    let filtrosEfetivos = { ...filtros };

    if (CATEGORIAS_COM_PERGUNTAS.includes(categoria)) {
        dadosCategoria = getDadosPorCategoria(categoria);
        filtrosEfetivos = sanitizarFiltrosParaCategoria(categoria, filtros, dadosCategoria);

        if (filtrosEfetivos.campus !== filtros.campus || filtrosEfetivos.curso !== filtros.curso) {
            console.log('[DADOS DEBUG] Filtros ajustados automaticamente', {
                categoria,
                original: { campus: filtros.campus, curso: filtros.curso },
                efetivo: { campus: filtrosEfetivos.campus, curso: filtrosEfetivos.curso },
            });
        }

        const frequencias = await window.api?.gerarGraficoData?.(
            dadosCategoria,
            filtrosEfetivos.perguntaOuSubcategoria,
            { campus: filtrosEfetivos.campus, curso: filtrosEfetivos.curso }
        ) || [];

        const mapa = new Map(frequencias.map((item) => [item.resposta, item.quantidade]));
        serie = ordem.map((conceito) => ({
            label: conceito,
            quantidade: mapa.get(conceito) || 0,
        }));
        titulo = filtrosEfetivos.perguntaOuSubcategoria;
    } else if (categoria === 'Campus') {
        const sub = filtros.perguntaOuSubcategoria;
        const mapa = {
            Discentes: appState.dados.discentes,
            Docentes: appState.dados.docentes,
            'Técnicos Administrativos': appState.dados.tecnicos,
        };
        const dadosBase = sub in mapa
            ? mapa[sub]
            : [...appState.dados.discentes, ...appState.dados.docentes, ...appState.dados.tecnicos];

        serie = contarPorCampo(dadosBase, 'campus', { campus: 'Geral', curso: 'Geral' });
        titulo = `Distribuição por Campus - ${sub}`;
        eixoX = 'Quantidade';
    } else if (categoria === 'Cursos') {
        const campusSelecionado = filtros.perguntaOuSubcategoria;
        const dadosBase = [...appState.dados.discentes, ...appState.dados.docentes];
        serie = contarPorCampo(dadosBase, 'curso', { campus: campusSelecionado, curso: 'Geral' });
        titulo = `Distribuição por Curso - ${campusSelecionado}`;
        eixoX = 'Quantidade';
    }

    if (serie.length === 0) {
        throw new Error('Não há dados para os filtros selecionados.');
    }

    return {
        categoria,
        filtros: filtrosEfetivos,
        dadosCategoria,
        serie,
        titulo,
        eixoX,
        comentarioPadrao: obterTextoComentarioCPA(categoria, filtrosEfetivos.perguntaOuSubcategoria),
        totalRespondentes: serie.reduce((acc, item) => acc + item.quantidade, 0),
    };
}

async function aplicarRelatorioNaInterface(relatorio) {
    DOM.emptyState.hidden = true;
    DOM.reportWrapper.hidden = false;
    document.getElementById('chartLoading').classList.remove('hidden');
    document.getElementById('plotlyChart').style.opacity = '0';

    DOM.bcCategoria.textContent = relatorio.categoria;
    DOM.bcCampus.textContent = relatorio.filtros.campus;
    DOM.bcCurso.textContent = relatorio.filtros.curso;
    DOM.reportTitle.textContent = relatorio.titulo;
    DOM.metaRespondentes.textContent = relatorio.totalRespondentes;

    if (DOM.analysisTextarea) {
        DOM.analysisTextarea.placeholder = relatorio.comentarioPadrao;
        DOM.analysisTextarea.dataset.comentarioPadraoAtual = relatorio.comentarioPadrao;
        marcarEstadoComentarioAutomatico();
        atualizarContadorCaracteres();
    }

    renderizarGraficoPlotly(
        relatorio.serie.map((item) => item.quantidade),
        relatorio.serie.map((item) => item.label),
        relatorio.eixoX
    );

    if (CATEGORIAS_COM_PERGUNTAS.includes(relatorio.categoria)) {
        await renderizarTabelaEstatisticas(
            relatorio.dadosCategoria,
            relatorio.filtros.perguntaOuSubcategoria,
            { campus: relatorio.filtros.campus, curso: relatorio.filtros.curso }
        );
    } else {
        DOM.distributionTableBody.innerHTML = '';
        DOM.statsBody.innerHTML = '';
    }

    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    document.getElementById('chartLoading').classList.add('hidden');
    document.getElementById('plotlyChart').style.opacity = '1';
}

function escaparHtml(texto) {
    return String(texto ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatarNumeroExportacao(valor) {
    if (Number.isInteger(valor)) {
        return valor.toLocaleString('pt-BR');
    }

    if (Number.isFinite(valor)) {
        return valor.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
    }

    return String(valor);
}

function obterDadosPorCategoriaExportacao(categoria) {
    if (categoria === 'Discentes') return appState.dados.discentes || [];
    if (categoria === 'Docentes') return appState.dados.docentes || [];
    if (categoria === 'Técnicos Administrativos') return appState.dados.tecnicos || [];
    return [];
}

function obterDadosCursosExportacao() {
    return [...(appState.dados.discentes || []), ...(appState.dados.docentes || [])];
}

function obterCampiComDados(dados) {
    return Array.from(new Set((dados || [])
        .map((item) => item.campus)
        .filter((campus) => campus && campus !== 'Geral')))
        .sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

function obterCursosComDados(dados, campus) {
    return Array.from(new Set((dados || [])
        .filter((item) => !campus || item.campus === campus)
        .map((item) => item.curso)
        .filter((curso) => curso && curso !== 'Geral')))
        .sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

async function adicionarPacoteRelatorio(folder, nomeArquivoBase, relatorio) {
    await aplicarRelatorioNaInterface(relatorio);
    const imagem = await capturarCardRelatorioComoDataUrl();
    folder.file(montarNomeArquivoPngPorTitulo(nomeArquivoBase), converterDataUrlParaBase64(imagem), { base64: true });
}

async function obterSerieParaExportacaoCompleta(categoria, item, filtros) {
    const constantes = obterConstantesUI();
    const ordem = constantes.ORDEM_CONCEITOS || FALLBACK_CONSTANTS.ORDEM_CONCEITOS;
    let serie = [];
    let titulo = '';
    let eixoX = 'Quantidade de Respostas';

    if (categoria === 'Discentes' || categoria === 'Docentes' || categoria === 'Técnicos Administrativos') {
        const dadosCategoria = getDadosPorCategoria(categoria);
        const frequencias = await window.api?.gerarGraficoData?.(
            dadosCategoria,
            item,
            { campus: filtros.campus, curso: filtros.curso }
        ) || [];

        const mapa = new Map(frequencias.map((registro) => [registro.resposta, registro.quantidade]));
        serie = ordem.map((conceito) => ({
            label: conceito,
            quantidade: mapa.get(conceito) || 0,
        }));
        titulo = item;
    } else if (categoria === 'Campus') {
        const dadosBase = obterDadosPorSubcategoriaCampus(item);
        serie = contarPorCampo(dadosBase, 'campus', { campus: filtros.campus, curso: filtros.curso });
        titulo = `Distribuição por Campus - ${item}`;
        eixoX = 'Quantidade';
    } else if (categoria === 'Cursos') {
        const dadosBase = [...appState.dados.discentes, ...appState.dados.docentes];
        serie = contarPorCampo(dadosBase, 'curso', { campus: item, curso: 'Geral' });
        titulo = `Distribuição por Curso - ${item}`;
        eixoX = 'Quantidade';
    }

    return { serie, titulo, eixoX };
}

function nomeArquivoExportacaoCompleta(categoria, item, filtros) {
    const partes = [categoria, item, filtros.campus, filtros.curso]
        .filter(Boolean)
        .map(sanitizarNomeArquivo)
        .filter(Boolean);

    return partes.join('__');
}

async function capturarCardRelatorioComoDataUrl() {
    if (!DOM.reportCard) {
        throw new Error('Card de relatório indisponível para captura.');
    }

    const wrapper = DOM.reportCard.parentElement;
    const mainContent = document.getElementById('mainContent');
    const scrollOriginalWrapper = wrapper ? wrapper.scrollTop : 0;
    const scrollOriginalMain = mainContent ? mainContent.scrollTop : 0;
    const originalTheme = document.documentElement.getAttribute('data-theme');
    const isDarkTheme = originalTheme === 'dark';

    try {
        if (isDarkTheme) {
            document.documentElement.setAttribute('data-theme', 'light');
            atualizarCoresGraficoPlotly();
        }

        DOM.reportCard.classList.add('report-card--exporting');
        DOM.reportCard.style.height = 'max-content';
        DOM.reportCard.style.overflow = 'visible';

        if (wrapper) {
            wrapper.style.height = 'max-content';
            wrapper.style.overflow = 'visible';
        }
        if (mainContent) {
            mainContent.style.height = 'max-content';
            mainContent.style.overflow = 'visible';
        }

        await new Promise(resolve => setTimeout(resolve, 500));

        const htmlToImageLib = window.htmlToImage;
        if (!htmlToImageLib) {
            throw new Error('A biblioteca html-to-image não foi encontrada. Verifique o index.html.');
        }

        return await htmlToImageLib.toPng(DOM.reportCard, {
            quality: 1.0,
            pixelRatio: 2,
            backgroundColor: '#ffffff',
            style: { margin: '0', transform: 'none' }
        });
    } finally {
        DOM.reportCard.classList.remove('report-card--exporting');
        DOM.reportCard.style.height = '';
        DOM.reportCard.style.overflow = '';

        if (wrapper) {
            wrapper.style.height = '';
            wrapper.style.overflow = '';
            wrapper.scrollTop = scrollOriginalWrapper;
        }
        if (mainContent) {
            mainContent.style.height = '';
            mainContent.style.overflow = '';
            mainContent.scrollTop = scrollOriginalMain;
        }

        if (isDarkTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
            atualizarCoresGraficoPlotly();
        }
    }
}

async function exportarArquivoZIP(uint8ArrayData, nomeArquivo) {
    console.log('[ZIP DEBUG] Preparando salvamento', {
        nomeArquivo,
        bytes: uint8ArrayData.byteLength,
        possuiApiNativa: Boolean(window.api?.salvarZip),
    });

    if (window.api?.salvarZip) {
        // Envia o Uint8Array diretamente, garantindo a integridade binária no Node.js
        const resultado = await window.api.salvarZip(nomeArquivo, uint8ArrayData);
        console.log('[ZIP DEBUG] Resultado do salvamento nativo', resultado);

        if (resultado?.canceled) {
            showToast('Exportação cancelada.', 'warn');
            return;
        }

        showToast('ZIP salvo com sucesso.', 'success');
        return;
    }

    // Fallback para Web (caso não esteja no Electron)
    const blob = new Blob([uint8ArrayData], { type: 'application/zip' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = nomeArquivo;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function exportarRelatorioCompletoZip() {
    if (typeof JSZip === 'undefined') {
        throw new Error('JSZip não foi carregado.');
    }

    const zip = new JSZip();
    const categoriasQuestionario = [
        { chave: 'Discentes', titulo: 'Discentes', perguntas: appState.constants?.PERGUNTAS_DISCENTES || FALLBACK_CONSTANTS.PERGUNTAS_DISCENTES },
        { chave: 'Docentes', titulo: 'Docentes', perguntas: appState.constants?.PERGUNTAS_DOCENTES || FALLBACK_CONSTANTS.PERGUNTAS_DOCENTES },
        { chave: 'Técnicos Administrativos', titulo: 'Técnicos Administrativos', perguntas: appState.constants?.PERGUNTAS_TECNICOS || FALLBACK_CONSTANTS.PERGUNTAS_TECNICOS },
    ];

    setExportButtonsDisabled(true);
    mostrarLoader('Gerando ZIP completo com estrutura sensível aos filtros...');

    try {
        zip.file('manifest.json', JSON.stringify({
            exportadoEm: new Date().toISOString(),
            observacao: 'Cada PNG captura o card completo do relatório, incluindo gráfico, distribuição, estatísticas e comentário.',
        }, null, 2));

        for (const categoria of categoriasQuestionario) {
            const dadosCategoria = obterDadosPorCategoriaExportacao(categoria.chave);
            const campiComDados = obterCampiComDados(dadosCategoria);
            const folderCategoria = zip.folder(sanitizarNomeArquivo(categoria.titulo));

            if (!folderCategoria) continue;

            for (let indicePergunta = 0; indicePergunta < categoria.perguntas.length; indicePergunta += 1) {
                const pergunta = categoria.perguntas[indicePergunta];
                const folderPergunta = folderCategoria.folder(`Q${String(indicePergunta + 1).padStart(2, '0')}`);

                if (!folderPergunta) continue;

                mostrarLoader(`Gerando ${categoria.titulo} • pergunta ${indicePergunta + 1}/${categoria.perguntas.length}`);

                const folderGeral = folderPergunta.folder('Geral');
                if (folderGeral) {
                    const relatorioGeral = await construirRelatorio({
                        categoria: categoria.chave,
                        campus: 'Geral',
                        curso: 'Geral',
                        perguntaOuSubcategoria: pergunta,
                    });

                    await adicionarPacoteRelatorio(folderGeral, pergunta, relatorioGeral);
                }

                const folderCampusRoot = folderPergunta.folder('Campus');
                if (!folderCampusRoot) continue;

                for (let indiceCampus = 0; indiceCampus < campiComDados.length; indiceCampus += 1) {
                    const campus = campiComDados[indiceCampus];
                    const folderCampus = folderCampusRoot.folder(`C${String(indiceCampus + 1).padStart(2, '0')}`);
                    if (!folderCampus) continue;

                    const folderCampusGeral = folderCampus.folder('Geral');
                    if (folderCampusGeral) {
                        const relatorioCampus = await construirRelatorio({
                            categoria: categoria.chave,
                            campus,
                            curso: 'Geral',
                            perguntaOuSubcategoria: pergunta,
                        });

                        await adicionarPacoteRelatorio(
                            folderCampusGeral,
                            `${pergunta} - ${campus}`,
                            relatorioCampus
                        );
                    }

                    if (categoria.chave === 'Técnicos Administrativos') {
                        continue;
                    }

                    const cursosComDados = obterCursosComDados(dadosCategoria, campus);
                    if (!cursosComDados.length) continue;

                    const folderCursos = folderCampus.folder('Cursos');
                    if (!folderCursos) continue;

                    for (let indiceCurso = 0; indiceCurso < cursosComDados.length; indiceCurso += 1) {
                        const curso = cursosComDados[indiceCurso];
                        const folderCurso = folderCursos.folder(`K${String(indiceCurso + 1).padStart(2, '0')}`);
                        if (!folderCurso) continue;

                        const relatorioCurso = await construirRelatorio({
                            categoria: categoria.chave,
                            campus,
                            curso,
                            perguntaOuSubcategoria: pergunta,
                        });

                        await adicionarPacoteRelatorio(
                            folderCurso,
                            `${pergunta} - ${campus} - ${curso}`,
                            relatorioCurso
                        );
                    }
                }
            }
        }

// ... (resto do código inicial da função continua igual)

        const folderCampus = zip.folder('Campus');
        if (folderCampus) {
            for (let indice = 0; indice < SUBCATEGORIAS_CAMPUS.length; indice += 1) {
                const subcategoria = SUBCATEGORIAS_CAMPUS[indice];
                const dadosBase = subcategoria === 'Geral'
                    ? [...(appState.dados.discentes || []), ...(appState.dados.docentes || []), ...(appState.dados.tecnicos || [])]
                    : obterDadosPorSubcategoriaCampus(subcategoria);

                const frequencias = contarPorCampo(dadosBase, 'campus', { campus: 'Geral', curso: 'Geral' });
                if (!frequencias.length) continue;

                const folderItem = folderCampus.folder(`C${String(indice + 1).padStart(2, '0')}`);
                if (!folderItem) continue;

                const relatorioCampus = await construirRelatorio({
                    categoria: 'Campus',
                    campus: 'Geral',
                    curso: 'Geral',
                    perguntaOuSubcategoria: subcategoria
                });

                await adicionarPacoteRelatorio(folderItem, `Distribuição por Campus - ${subcategoria}`, relatorioCampus);
            }
        }

        const folderCursos = zip.folder('Cursos');
        if (folderCursos) {
            const dadosCursos = obterDadosCursosExportacao();
            const campiComDados = obterCampiComDados(dadosCursos);

            for (let indice = 0; indice < campiComDados.length; indice += 1) {
                const campus = campiComDados[indice];
                const dadosCampus = dadosCursos.filter((item) => item.campus === campus);
                const frequencias = contarPorCampo(dadosCampus, 'curso', { campus, curso: 'Geral' });
                if (!frequencias.length) continue;

                const folderCampusFolder = folderCursos.folder(`C${String(indice + 1).padStart(2, '0')}`);
                if (!folderCampusFolder) continue;

                const relatorioCurso = await construirRelatorio({
                    categoria: 'Cursos',
                    campus: 'Geral',
                    curso: 'Geral',
                    perguntaOuSubcategoria: campus
                });

                await adicionarPacoteRelatorio(folderCampusFolder, `Distribuição por Curso - ${campus}`, relatorioCurso);
            }
        }

        // Alteração Crítica: type: 'uint8array'
        const zipData = await zip.generateAsync({
            type: 'uint8array',
            compression: 'DEFLATE',
            compressionOptions: { level: 6 },
        });

        console.log('[ZIP DEBUG] ZIP gerado em memória', {
            categoria: 'Relatorio Completo',
            bytes: zipData.byteLength,
        });

        await exportarArquivoZIP(zipData, 'CPA_Relatorio_Completo_Todas_As_Combinacoes.zip');
        showToast('ZIP completo gerado com todas as categorias e combinações.', 'success');
    } finally {
        esconderLoader();
        setExportButtonsDisabled(false);
    }
}

async function exportarGraficosCategoriaZip() {
    const categoria = DOM.selectCategoria?.value || '';
    if (!CATEGORIAS_COM_PERGUNTAS.includes(categoria)) {
        throw new Error('Escolha uma categoria com perguntas para exportar os gráficos em ZIP.');
    }

    if (typeof JSZip === 'undefined') {
        throw new Error('JSZip não foi carregado.');
    }

    const perguntas = appState.constants?.[
        categoria === 'Discentes' ? 'PERGUNTAS_DISCENTES' : categoria === 'Docentes' ? 'PERGUNTAS_DOCENTES' : 'PERGUNTAS_TECNICOS'
    ] || [];
    const filtros = montarFiltrosAtivos();
    const zip = new JSZip();

    setExportButtonsDisabled(true);
    mostrarLoader('Gerando relatórios da categoria...');

    try {
        zip.file('filtros.json', JSON.stringify({
            categoria,
            campus: filtros.campus,
            curso: filtros.curso,
            exportadoEm: new Date().toISOString(),
        }, null, 2));

        for (let indice = 0; indice < perguntas.length; indice += 1) {
            const pergunta = perguntas[indice];
            mostrarLoader(`Gerando relatório ${indice + 1} de ${perguntas.length}...`);

            // 1. Gera os dados e preenche a UI simulando o fluxo normal
            const relatorio = await construirRelatorio({
                categoria: categoria,
                campus: filtros.campus,
                curso: filtros.curso,
                perguntaOuSubcategoria: pergunta
            });

            // 2. Adiciona o card completo capturado diretamente no ZIP
            const numero = String(indice + 1).padStart(2, '0');
            await adicionarPacoteRelatorio(zip, `${numero}_${pergunta}`, relatorio);
        }

        // 3. Gera o arquivo como uint8array em vez de blob para evitar corrompimento
        const zipData = await zip.generateAsync({
            type: 'uint8array',
            compression: 'DEFLATE',
            compressionOptions: { level: 6 },
        });

        await exportarArquivoZIP(zipData, `CPA_Graficos_Completos_${sanitizarNomeArquivo(categoria)}.zip`);
    } finally {
        esconderLoader();
        setExportButtonsDisabled(false);
    }
}

    // Funções de apoio para exportação em pastas

    function dataUrlParaBase64(dataUrl) {
        return converterDataUrlParaBase64(dataUrl);
    }

    async function salvarErroExportacao(caminhoArquivo, erro) {
        try {
            const texto = String(erro?.stack || erro?.message || erro || 'Erro desconhecido');
            const base64 = btoa(unescape(encodeURIComponent(texto)));

            await window.api.salvarArquivo(caminhoArquivo, base64);
        } catch (e) {
            console.error('Falha ao salvar arquivo de erro', e);
        }
    }

    async function exportarRelatoriosParaPastas() {
        const pastaDestino = await window.api.selecionarPasta();

        if (!pastaDestino || pastaDestino.canceled) {
            return;
        }

        const root = pastaDestino.path;

        const detalhes = obterDetalhesExportacaoCompleta();

        setExportButtonsDisabled(true);
        mostrarLoader('Preparando exportação...');

        try {

            // =====================================
            // Categorias com perguntas
            // =====================================
            const categoriasQuestionario = detalhes.filter(
                x => x.tipo === 'perguntas'
            );

            for (const categoria of categoriasQuestionario) {

                const dadosCategoria =
                    obterDadosPorCategoriaExportacao(categoria.chave);

                const campiComDados =
                    obterCampiComDados(dadosCategoria);

                for (
                    let indicePergunta = 0;
                    indicePergunta < categoria.perguntas.length;
                    indicePergunta++
                ) {

                    const pergunta =
                        categoria.perguntas[indicePergunta];

                    const pastaPergunta =
                        `${String(indicePergunta + 1).padStart(2, '0')}_` +
                        `${sanitizarNomeArquivo(pergunta)}`;

                    // =========================
                    // GERAL
                    // =========================
                    try {

                        mostrarLoader(
                            `Gerando ${categoria.titulo} • pergunta ${indicePergunta + 1}/${categoria.perguntas.length}`
                        );

                        const relatorio =
                            await construirRelatorio({
                                categoria: categoria.chave,
                                campus: 'Geral',
                                curso: 'Geral',
                                perguntaOuSubcategoria: pergunta
                            });

                        await aplicarRelatorioNaInterface(relatorio);

                        const png =
                            await capturarCardRelatorioComoDataUrl();

                        const filePath =
                            `${root}/` +
                            `${sanitizarNomeArquivo(categoria.titulo)}/` +
                            `${pastaPergunta}/Geral/` +
                            `CPA_${sanitizarNomeArquivo(relatorio.titulo)}.png`;

                        await window.api.salvarArquivo(
                            filePath,
                            dataUrlParaBase64(png)
                        );

                    } catch (erro) {
                        console.error(erro);

                        await salvarErroExportacao(
                            `${root}/${sanitizarNomeArquivo(categoria.titulo)}/${pastaPergunta}/Geral/export.error.txt`,
                            erro
                        );
                    }

                    // =========================
                    // CAMPUS
                    // =========================
                    for (
                        let indiceCampus = 0;
                        indiceCampus < campiComDados.length;
                        indiceCampus++
                    ) {

                        const campus = campiComDados[indiceCampus];

                        try {

                            mostrarLoader(
                                `Gerando ${categoria.titulo} • pergunta ${indicePergunta + 1}/${categoria.perguntas.length} • campus ${indiceCampus + 1}/${campiComDados.length}`
                            );

                            const relatorio =
                                await construirRelatorio({
                                    categoria: categoria.chave,
                                    campus,
                                    curso: 'Geral',
                                    perguntaOuSubcategoria: pergunta
                                });

                            await aplicarRelatorioNaInterface(relatorio);

                            const png =
                                await capturarCardRelatorioComoDataUrl();

                            const filePath =
                                `${root}/` +
                                `${sanitizarNomeArquivo(categoria.titulo)}/` +
                                `${pastaPergunta}/` +
                                `Campus_${sanitizarNomeArquivo(campus)}/` +
                                `CPA_${sanitizarNomeArquivo(relatorio.titulo)}__${sanitizarNomeArquivo(campus)}.png`;

                            await window.api.salvarArquivo(
                                filePath,
                                dataUrlParaBase64(png)
                            );

                        } catch (erro) {

                            console.error(erro);

                            await salvarErroExportacao(
                                `${root}/${sanitizarNomeArquivo(categoria.titulo)}/${pastaPergunta}/Campus_${sanitizarNomeArquivo(campus)}/export.error.txt`,
                                erro
                            );
                        }

                        if (categoria.chave === 'Técnicos Administrativos') {
                            continue;
                        }

                        const cursos =
                            obterCursosComDados(
                                dadosCategoria,
                                campus
                            );

                        for (const curso of cursos) {

                            try {

                                const relatorio =
                                    await construirRelatorio({
                                        categoria: categoria.chave,
                                        campus,
                                        curso,
                                        perguntaOuSubcategoria: pergunta
                                    });

                                await aplicarRelatorioNaInterface(relatorio);

                                const png =
                                    await capturarCardRelatorioComoDataUrl();

                                const filePath =
                                    `${root}/` +
                                    `${sanitizarNomeArquivo(categoria.titulo)}/` +
                                    `${pastaPergunta}/` +
                                    `Campus_${sanitizarNomeArquivo(campus)}/` +
                                    `Cursos/` +
                                    `${sanitizarNomeArquivo(curso)}/` +
                                    `CPA_${sanitizarNomeArquivo(relatorio.titulo)}__${sanitizarNomeArquivo(campus)}__${sanitizarNomeArquivo(curso)}.png`;

                                await window.api.salvarArquivo(
                                    filePath,
                                    dataUrlParaBase64(png)
                                );

                            } catch (erro) {

                                console.error(erro);

                                await salvarErroExportacao(
                                    `${root}/${sanitizarNomeArquivo(categoria.titulo)}/${pastaPergunta}/Campus_${sanitizarNomeArquivo(campus)}/Cursos/${sanitizarNomeArquivo(curso)}/export.error.txt`,
                                    erro
                                );
                            }
                        }
                    }
                }
            }

            showToast(
                'Exportação concluída com sucesso.',
                'success'
            );

        } finally {
            esconderLoader();
            setExportButtonsDisabled(false);
        }
    }

    // ==========================================
// 5. LÓGICA DE NEGÓCIO E FILTROS
// ==========================================

function atualizarDropdownCursos() {
    if (!DOM.selectCurso || !DOM.cursoBadge) return;
    if (!DOM.selectCampus) return;
    const campus = DOM.selectCampus.value;
    const cursosPorCampus = appState.constants?.CURSOS_POR_CAMPUS || {};
    const cursos = campus ? (cursosPorCampus[campus] || []) : [];
    
    // Reseta dropdown
    DOM.selectCurso.innerHTML = '<option value="">— Geral —</option>';
    
    if (cursos.length > 0) {
        cursos.forEach((curso) => {
            const opt = document.createElement('option');
            opt.value = curso;
            opt.textContent = curso;
            DOM.selectCurso.appendChild(opt);
        });
        
        DOM.selectCurso.disabled = false;
        DOM.cursoBadge.textContent = `${cursos.length} cursos`;
        DOM.cursoBadge.style.color = 'var(--color-primary)';
        DOM.cursoBadge.style.borderColor = 'var(--border-focus)';
    } else {
        DOM.selectCurso.disabled = false;
        DOM.cursoBadge.textContent = 'Geral';
        DOM.cursoBadge.style.color = 'var(--text-tertiary)';
        DOM.cursoBadge.style.borderColor = 'var(--border-color)';
    }
}

function montarFiltrosAtivos() {
    return {
        categoria: DOM.selectCategoria.value,
        campus: DOM.selectCampus.value || 'Geral',
        curso: DOM.selectCurso.value || 'Geral',
        perguntaOuSubcategoria: DOM.selectPergunta.value,
    };
}

function getDadosPorCategoria(categoria) {
    if (categoria === 'Discentes') return appState.dados.discentes;
    if (categoria === 'Docentes') return appState.dados.docentes;
    if (categoria === 'Técnicos Administrativos') return appState.dados.tecnicos;
    return [];
}

function contarPorCampo(dados, campo, filtros) {
    let filtrados = [...dados];

    if (filtros.campus !== 'Geral') {
        filtrados = filtrados.filter((d) => d.campus === filtros.campus);
    }
    if (filtros.curso !== 'Geral') {
        filtrados = filtrados.filter((d) => d.curso === filtros.curso);
    }

    const contagem = new Map();
    filtrados.forEach((item) => {
        const chave = item[campo] || 'Não informado';
        contagem.set(chave, (contagem.get(chave) || 0) + 1);
    });

    return Array.from(contagem.entries())
        .map(([label, quantidade]) => ({ label, quantidade }))
        .sort((a, b) => a.label.localeCompare(b.label, 'pt-BR'));
}

async function gerarRelatorio() {
    const filtros = montarFiltrosAtivos();
    const categoria = filtros.categoria;

    if (!categoria) {
        showToast('Selecione uma categoria para continuar.', 'warn');
        return;
    }

    if (CATEGORIAS_COM_PERGUNTAS.includes(categoria) && !filtros.perguntaOuSubcategoria) {
        showToast('Selecione uma pergunta para gerar a visualização.', 'warn');
        return;
    }

    if (categoria === 'Campus' && !filtros.perguntaOuSubcategoria) {
        showToast('Selecione uma subcategoria para o relatório por campus.', 'warn');
        return;
    }

    if (categoria === 'Cursos' && !filtros.perguntaOuSubcategoria) {
        showToast('Selecione um campus para o relatório por curso.', 'warn');
        return;
    }

    try {
        const relatorio = await construirRelatorio(filtros);
        await aplicarRelatorioNaInterface(relatorio);
        showToast('Relatório gerado com sucesso.', 'success');
    } catch (error) {
        console.error('Erro ao gerar relatório:', error);
        document.getElementById('chartLoading').classList.add('hidden');
        showToast(error.message || 'Erro ao gerar relatório.', 'error');
    }
}

// ==========================================
// 6. RENDERIZAÇÃO DO PLOTLY E TABELAS
// ==========================================

function getThemeColors() {
    const style = getComputedStyle(document.body);
    return {
        bgCardInner: style.getPropertyValue('--bg-card-inner').trim() || '#1e2329',
        textPrimary: style.getPropertyValue('--text-primary').trim() || '#e8eaed',
        textSecondary: style.getPropertyValue('--text-secondary').trim() || '#9aa0a8',
        borderColor: style.getPropertyValue('--border-color').trim() || '#333',
        ifsGreen: style.getPropertyValue('--color-primary').trim() || '#2f9e41'
    };
}

function calcularMargemEsquerdaGrafico(rotulos) {
    const maiorRotulo = (rotulos || []).reduce((maior, rotulo) => {
        const texto = String(rotulo || '');
        return texto.length > maior.length ? texto : maior;
    }, '');

    const margemBase = 110;
    const margemPorCaractere = 7;
    const margemCalculada = margemBase + (maiorRotulo.length * margemPorCaractere);

    return Math.max(margemBase, Math.min(360, margemCalculada));
}

function renderizarGraficoPlotly(xData, yLabels, eixoXtitulo = 'Quantidade de Respostas') {
    const colors = getThemeColors();
    const margemEsquerda = calcularMargemEsquerdaGrafico(yLabels);
    
    const trace = {
        x: xData, 
        y: yLabels,
        type: 'bar', 
        orientation: 'h',
        marker: { color: colors.ifsGreen },
        text: xData, 
        textposition: 'auto',
        hoverinfo: 'y+x'
    };

    const layout = {
        paper_bgcolor: 'rgba(0,0,0,0)', // Transparente para usar o CSS
        plot_bgcolor: 'rgba(0,0,0,0)',
        margin: { t: 10, r: 20, l: margemEsquerda, b: 40 },
        font: { family: 'Open Sans', color: colors.textPrimary, size: 12 },
        xaxis: { 
            showgrid: true, 
            gridcolor: colors.borderColor, 
            title: { text: eixoXtitulo, font: { color: colors.textSecondary } }
        },
        yaxis: { 
            showgrid: false,
            automargin: true,
            ticklabeloverflow: 'allow',
            tickfont: { size: 12, color: colors.textPrimary }
        },
        staticPlot: false
    };

    const config = { responsive: true, displayModeBar: false };

    Plotly.newPlot('plotlyChart', [trace], layout, config);
}

function atualizarCoresGraficoPlotly() {
    const colors = getThemeColors();
    const update = {
        'font.color': colors.textPrimary,
        'xaxis.gridcolor': colors.borderColor,
        'xaxis.title.font.color': colors.textSecondary,
        'yaxis.tickfont.color': colors.textPrimary
    };
    
    // Atualiza apenas o layout sem reconstruir os dados
    try {
        Plotly.relayout('plotlyChart', update);
    } catch (error) {
        // Sem gráfico renderizado ainda; ignorar.
    }
}

async function renderizarTabelaEstatisticas(dados, pergunta, filtros) {
    try {
        // Chama o backend para calcular as estatísticas e distribuição
        const tabelasData = await window.api?.gerarTabelas?.(dados, pergunta, filtros);
        
        if (!tabelasData || !tabelasData.distribuicao || !tabelasData.estatisticas) {
            throw new Error('Dados de tabelas não retornados do backend');
        }

        // Renderiza TABELA 1: DISTRIBUIÇÃO
        renderizarTabelaDistribuicao(tabelasData.distribuicao);

        // Renderiza TABELA 2: ESTATÍSTICAS
        renderizarEstatisticas(tabelasData.estatisticas);

    } catch (error) {
        console.error('Erro ao renderizar tabelas:', error);
        DOM.distributionTableBody.innerHTML = '<div style="grid-column: 1/-1; padding: 20px; text-align: center; color: var(--text-secondary);">Erro ao carregar tabelas</div>';
        DOM.statsBody.innerHTML = '<div style="grid-column: 1/-1; padding: 20px; text-align: center; color: var(--text-secondary);">Erro ao carregar estatísticas</div>';
    }
}

function renderizarTabelaDistribuicao(distribuicao) {
    if (!DOM.distributionTableBody) return;
    DOM.distributionTableBody.innerHTML = '';

    if (!distribuicao || distribuicao.length === 0) {
        DOM.distributionTableBody.innerHTML = '<div style="grid-column: 1/-1; padding: 20px; text-align: center; color: var(--text-secondary);">Sem dados para exibir</div>';
        return;
    }

    // Renderiza cada linha da distribuição
    distribuicao.forEach((linha) => {
        const row = document.createElement('div');
        row.className = 'distribution-table__row';
        row.setAttribute('role', 'row');

        row.innerHTML = `
            <div role="cell" class="distribution-table__cell">${linha.conceito}</div>
            <div role="cell" class="distribution-table__cell">${linha.fi}</div>
            <div role="cell" class="distribution-table__cell">${linha.frPercent}</div>
            <div role="cell" class="distribution-table__cell">${linha.Fi}</div>
            <div role="cell" class="distribution-table__cell">${linha.FiPercent}</div>
        `;
        DOM.distributionTableBody.appendChild(row);
    });
}

function renderizarEstatisticas(estatisticas) {
    if (!DOM.statsBody) return;
    DOM.statsBody.innerHTML = '';

    if (!estatisticas || estatisticas.length === 0) {
        DOM.statsBody.innerHTML = '<div style="grid-column: 1/-1; padding: 20px; text-align: center; color: var(--text-secondary);">Sem dados para exibir</div>';
        return;
    }

    // Renderiza cada linha de estatísticas
    estatisticas.forEach((stat) => {
        const row = document.createElement('div');
        row.className = 'stats-row';
        row.setAttribute('role', 'row');

        // Destaca o Indicador de Aprovação com chip
        let resultadoHtml = stat.resultado;
        if (stat.medida === 'Indicador de Aprovação') {
            let chipClass = 'approval-chip--high';
            if (stat.resultado === 'Fragilidade') chipClass = 'approval-chip--low';
            else if (stat.resultado === 'Ponto a melhorar') chipClass = 'approval-chip--mid';
            resultadoHtml = `<span class="approval-chip ${chipClass}">${stat.resultado}</span>`;
        }

        row.innerHTML = `
            <div role="cell" class="stats-row__label">${stat.medida}</div>
            <div role="cell" class="stats-row__value">${resultadoHtml}</div>
        `;
        DOM.statsBody.appendChild(row);
    });
}

// ==========================================
// 7. EXPORTAÇÃO (HTML2CANVAS)
// ==========================================

async function baixarRelatorioPNG() {
    if (!DOM.reportCard) return;

    const btn = DOM.btnDownloadPng;
    const textoOriginal = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span class="chart-loading__spinner" style="width:14px;height:14px;border-width:2px;display:inline-block;margin-right:8px;"></span> Processando...`;

    // 1. Identificar os contêineres que possuem rolagem (scroll)
    // Precisamos expandi-los para que a biblioteca não corte a imagem
    const wrapper = DOM.reportCard.parentElement;
    const mainContent = document.getElementById('mainContent');

    // Salva as posições de scroll originais para restaurar depois
    const scrollOriginalWrapper = wrapper ? wrapper.scrollTop : 0;
    const scrollOriginalMain = mainContent ? mainContent.scrollTop : 0;

    const originalTheme = document.documentElement.getAttribute('data-theme');
    const isDarkTheme = originalTheme === 'dark';

    try {
        // 2. Forçar o tema claro para a exportação (garante fundo branco e contraste)
        if (isDarkTheme) {
            document.documentElement.setAttribute('data-theme', 'light');
            atualizarCoresGraficoPlotly();
        }

        // Adiciona a classe que remove sombras e ajusta as variáveis CSS (do seu styles.css)
        DOM.reportCard.classList.add('report-card--exporting');

        // 3. O Segredo do Corte: Expandir os contêineres para "max-content"
        // Isso força o DOM a renderizar tudo de uma vez, sem esconder nada no overflow
        DOM.reportCard.style.height = 'max-content';
        DOM.reportCard.style.overflow = 'visible';

        if (wrapper) {
            wrapper.style.height = 'max-content';
            wrapper.style.overflow = 'visible';
        }
        if (mainContent) {
            mainContent.style.height = 'max-content';
            mainContent.style.overflow = 'visible';
        }

        // 4. Aguardar o Repaint do navegador e do Plotly
        // 500ms é o "sweet spot" seguro para garantir que a transição de CSS termine.
        await new Promise(resolve => setTimeout(resolve, 500));

        // 5. Utilizar html-to-image para capturar
        const htmlToImageLib = window.htmlToImage;
        if (!htmlToImageLib) {
            throw new Error('A biblioteca html-to-image não foi encontrada. Verifique o index.html.');
        }

        // Gera o PNG com qualidade Retina (pixelRatio: 2) para máxima nitidez
        const dataUrl = await htmlToImageLib.toPng(DOM.reportCard, {
            quality: 1.0,
            pixelRatio: 2,
            backgroundColor: '#ffffff',
            style: { margin: '0', transform: 'none' }
        });

        // 6. Criar link e disparar o download
        const link = document.createElement('a');
        const tituloLimpo = (DOM.selectPergunta && DOM.selectPergunta.value) ? DOM.selectPergunta.value : 'Relatorio_CPA';
        const nomeArquivo = tituloLimpo.replace(/[/\\?%*:|"<>]/g, '');
        link.download = `CPA_Grafico_${nomeArquivo}.png`;
        link.href = dataUrl;
        link.click();

        showToast('Relatório baixado com sucesso!', 'success');

    } catch (error) {
        console.error("Erro na exportação:", error);
        showToast('Erro ao capturar a imagem. Verifique o console.', 'error');
    } finally {
        // 7. Restaurar a Interface ao estado original (recolher e devolver os scrolls)
        DOM.reportCard.classList.remove('report-card--exporting');
        DOM.reportCard.style.height = '';
        DOM.reportCard.style.overflow = '';

        if (wrapper) {
            wrapper.style.height = '';
            wrapper.style.overflow = '';
            wrapper.scrollTop = scrollOriginalWrapper;
        }
        if (mainContent) {
            mainContent.style.height = '';
            mainContent.style.overflow = '';
            mainContent.scrollTop = scrollOriginalMain;
        }

        // Devolve o tema escuro se o usuário estava usando
        if (isDarkTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
            atualizarCoresGraficoPlotly();
        }

        btn.innerHTML = textoOriginal;
        btn.disabled = false;
    }
}