
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
    DOM.analysisTextarea?.addEventListener('input', atualizarContadorCaracteres);

    // Ações Principais
    DOM.btnAplicar?.addEventListener('click', gerarRelatorio);
    DOM.btnDownloadPng?.addEventListener('click', baixarRelatorioPNG);

    // Exportações em Lote (Mock)
    DOM.btnExportZipRelatorio?.addEventListener('click', () => showToast('Iniciando processamento em lote do Relatório Completo...', 'info'));
    DOM.btnExportZipGraficos?.addEventListener('click', () => showToast('Gerando gráficos da categoria em formato ZIP...', 'info'));
}

async function inicializarDadosEControles() {
    await inicializarConstantesUI();
    await carregarBasesDados();
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

        showToast('Bases de dados carregadas com sucesso.', 'success');
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

function aoAlterarCategoria() {
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
        opcoes = constantes.FUNCOES || [];
        labelTexto = 'Subcategoria';
    } else if (categoria === 'Cursos') {
        opcoes = constantes.TODOS_CURSOS || [];
        labelTexto = 'Curso';
    }

    DOM.labelPergunta.textContent = labelTexto;
    popularSelect(DOM.selectPergunta, opcoes, `— Selecione ${labelTexto.toLowerCase()} —`);

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
    DOM.analysisTextarea.placeholder = obterTextoComentarioCPA(categoria, pergunta);
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

    DOM.emptyState.hidden = true;
    DOM.reportWrapper.hidden = false;
    document.getElementById('chartLoading').classList.remove('hidden');
    document.getElementById('plotlyChart').style.opacity = '0';

    DOM.bcCategoria.textContent = categoria;
    DOM.bcCampus.textContent = filtros.campus;
    DOM.bcCurso.textContent = filtros.curso;

    try {
        let serie = [];
        let titulo = '';
        let eixoX = 'Quantidade de Respostas';

        if (CATEGORIAS_COM_PERGUNTAS.includes(categoria)) {
            const dadosCategoria = getDadosPorCategoria(categoria);
            const frequencias = await window.api?.gerarGraficoData?.(
                dadosCategoria,
                filtros.perguntaOuSubcategoria,
                { campus: filtros.campus, curso: filtros.curso }
            );
            const ordem = appState.constants?.ORDEM_CONCEITOS || [];
            const mapa = new Map((frequencias || []).map((f) => [f.resposta, f.quantidade]));
            serie = ordem.map((conceito) => ({ label: conceito, quantidade: mapa.get(conceito) || 0 }));
            titulo = filtros.perguntaOuSubcategoria;
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
            const dadosBase = [...appState.dados.discentes, ...appState.dados.docentes];
            serie = contarPorCampo(dadosBase, 'curso', filtros);
            titulo = 'Distribuição por Curso';
            eixoX = 'Quantidade';
        }

        if (serie.length === 0) {
            throw new Error('Não há dados para os filtros selecionados.');
        }

        DOM.reportTitle.textContent = titulo;
        DOM.metaRespondentes.textContent = serie.reduce((acc, item) => acc + item.quantidade, 0);

        renderizarGraficoPlotly(serie.map((item) => item.quantidade), serie.map((item) => item.label), eixoX);
        
        // Renderiza as tabelas apenas se for categoria com perguntas
        if (CATEGORIAS_COM_PERGUNTAS.includes(categoria)) {
            const dadosCategoria = getDadosPorCategoria(categoria);
            await renderizarTabelaEstatisticas(dadosCategoria, filtros.perguntaOuSubcategoria, { campus: filtros.campus, curso: filtros.curso });
        } else {
            DOM.distributionTableBody.innerHTML = '';
            DOM.statsBody.innerHTML = '';
        }

        document.getElementById('chartLoading').classList.add('hidden');
        document.getElementById('plotlyChart').style.opacity = '1';
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

function renderizarGraficoPlotly(xData, yLabels, eixoXtitulo = 'Quantidade de Respostas') {
    const colors = getThemeColors();
    
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
        margin: { t: 10, r: 20, l: 110, b: 40 },
        font: { family: 'Open Sans', color: colors.textPrimary, size: 12 },
        xaxis: { 
            showgrid: true, 
            gridcolor: colors.borderColor, 
            title: { text: eixoXtitulo, font: { color: colors.textSecondary } }
        },
        yaxis: { 
            showgrid: false,
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