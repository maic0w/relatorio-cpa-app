const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { carregarBase, calcularFrequencia, calcularEstatisticas } = require('./dataProcessor');
const constants = require('./constants');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        title: "Relatórios de Gestão - CPA",
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    win.loadFile(path.join(__dirname, '../frontend/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// Handlers IPC
ipcMain.handle('carregar-dados', async (event, caminho, tipo) => {
    try {
        const absolutePath = path.join(app.getAppPath(), 'data', caminho);
        return await carregarBase(absolutePath, tipo);
    } catch (e) {
        console.error("Erro ao carregar CSV:", e);
        return [];
    }
});

ipcMain.handle('gerar-grafico-data', async (event, dados, pergunta, filtros) => {
    return calcularFrequencia(dados, pergunta, filtros);
});

ipcMain.handle('gerar-tabelas', async (event, dados, pergunta, filtros) => {
    try {
        const frequencias = calcularFrequencia(dados, pergunta, filtros);
        return calcularEstatisticas(frequencias);
    } catch (e) {
        console.error("Erro ao gerar tabelas:", e);
        return { distribuicao: [], estatisticas: [] };
    }
});

ipcMain.handle('obter-constantes', async () => {
    return constants;
});

// Captura nativa de região (usada para exportar PNG de alta fidelidade no Electron)
ipcMain.handle('capturar-regiao', async (event, rect) => {
    try {
        const win = BrowserWindow.fromWebContents(event.sender);
        if (!win) throw new Error('Janela não encontrada');

        // capturePage aceita um Rectangle relativo à janela
        const image = await win.webContents.capturePage(rect);
        return image.toDataURL();
    } catch (e) {
        console.error('Erro ao capturar região nativa:', e);
        throw e;
    }
});