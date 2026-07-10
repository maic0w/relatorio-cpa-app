
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    carregarDados: (caminho, tipo) => ipcRenderer.invoke('carregar-dados', caminho, tipo),
    gerarGraficoData: (dados, pergunta, filtros) => ipcRenderer.invoke('gerar-grafico-data', dados, pergunta, filtros),
    gerarTabelas: (dados, pergunta, filtros) => ipcRenderer.invoke('gerar-tabelas', dados, pergunta, filtros),
    obterConstantes: () => ipcRenderer.invoke('obter-constantes'),
    capturarRegiao: (rect) => ipcRenderer.invoke('capturar-regiao', rect),
    salvarZip: (nomeArquivo, conteudo) => ipcRenderer.invoke('salvar-zip', nomeArquivo, conteudo),
    selecionarPasta: () => ipcRenderer.invoke('selecionar-pasta'),
    salvarArquivo: (filePath, base64) => ipcRenderer.invoke('salvar-arquivo', filePath, base64),
    selecionarArquivosDados: () => ipcRenderer.invoke('selecionar-arquivos-dados'),
});