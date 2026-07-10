const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const { carregarBase, calcularFrequencia, calcularEstatisticas } = require('./dataProcessor');
const constants = require('./constants');

function mapearArquivosDados(filePaths = []) {
    const mapping = {};

    for (const fp of filePaths) {
        // Evita falso positivo por diretórios como "Documents": analisa só o nome do arquivo.
        const lower = path.basename(String(fp)).toLowerCase();
        if (lower.includes('disc') || lower.includes('discente')) {
            mapping.discentes = fp;
        } else if (lower.includes('doc') || lower.includes('docente')) {
            mapping.docentes = fp;
        } else if (lower.includes('tec') || lower.includes('tecnico') || lower.includes('tec_adm')) {
            mapping.tecnicos = fp;
        }
    }

    return mapping;
}

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
        let absolutePath = caminho;
        if (!path.isAbsolute(caminho)) {
            absolutePath = path.join(app.getAppPath(), 'data', caminho);
        }
        return await carregarBase(absolutePath, tipo);
    } catch (e) {
        if (e?.code !== 'ENOENT') {
            console.error("Erro ao carregar CSV:", e);
        }
        return [];
    }
});

// Selecionar pasta de dados e mapear CSVs automaticamente
ipcMain.handle('selecionar-arquivos-dados', async () => {
    try {
        console.log('[DADOS DEBUG] Abrindo seletor de pasta de dados...');
        const resultado = await dialog.showOpenDialog({
            title: 'Selecione a pasta com os arquivos CSV de dados',
            defaultPath: app.getPath('documents'),
            properties: ['openDirectory', 'createDirectory']
        });

        console.log('[DADOS DEBUG] Resultado do seletor:', {
            canceled: resultado.canceled,
            filePaths: resultado.filePaths,
        });

        if (resultado.canceled || !resultado.filePaths?.length) {
            return { canceled: true };
        }

        const folderPath = resultado.filePaths[0];
        console.log('[DADOS DEBUG] Pasta selecionada:', folderPath);

        const entries = fs.readdirSync(folderPath, { withFileTypes: true });
        const nomesArquivos = entries.filter((entry) => entry.isFile()).map((entry) => entry.name);
        console.log('[DADOS DEBUG] Arquivos encontrados na pasta:', nomesArquivos);

        const filePaths = fs.readdirSync(folderPath)
            .filter((name) => name.toLowerCase().endsWith('.csv'))
            .map((name) => path.join(folderPath, name));

        console.log('[DADOS DEBUG] CSVs filtrados:', filePaths);

        const mapping = mapearArquivosDados(filePaths);
        console.log('[DADOS DEBUG] Mapping automático:', mapping);

        return {
            canceled: false,
            folderPath,
            filePaths,
            mapping
        };
    } catch (error) {
        console.error('Erro ao ler pasta de dados:', error);
        return {
            canceled: false,
            filePaths: [],
            mapping: {},
            error: error?.message || 'Falha ao ler a pasta selecionada.'
        };
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

ipcMain.handle('salvar-zip', async (event, nomeArquivo, conteudo) => {
    try {
        console.log('[ZIP DEBUG] salvar-zip chamado', {
            nomeArquivo,
            tipoConteudo: Object.prototype.toString.call(conteudo),
            ehUint8Array: conteudo instanceof Uint8Array,
            bytes: conteudo?.byteLength ?? conteudo?.length ?? null,
        });

        const resultado = await dialog.showSaveDialog({
            title: 'Salvar arquivo ZIP',
            defaultPath: nomeArquivo,
            filters: [{ name: 'Arquivo ZIP', extensions: ['zip'] }],
        });

        console.log('[ZIP DEBUG] Resultado do diálogo de salvar', resultado);

        if (resultado.canceled || !resultado.filePath) {
            return { canceled: true };
        }

        const buffer = Buffer.isBuffer(conteudo) ? conteudo : Buffer.from(conteudo);
        console.log('[ZIP DEBUG] Buffer pronto para escrita', {
            filePath: resultado.filePath,
            bufferBytes: buffer.byteLength,
        });
        fs.writeFileSync(resultado.filePath, buffer);
        console.log('[ZIP DEBUG] ZIP gravado com sucesso', resultado.filePath);
        return { canceled: false, filePath: resultado.filePath };
    } catch (e) {
        console.error('Erro ao salvar ZIP:', e);
        throw e;
    }
});

// ==========================================
// Seleção de pasta e salvar arquivo genérico
// ==========================================
ipcMain.handle('selecionar-pasta', async () => {
    const resultado = await dialog.showOpenDialog({
        title: 'Escolha a pasta de destino',
        properties: ['openDirectory', 'createDirectory']
    });

    if (resultado.canceled || !resultado.filePaths?.length) {
        return { canceled: true };
    }

    return {
        canceled: false,
        path: resultado.filePaths[0]
    };
});

ipcMain.handle('salvar-arquivo', async (event, filePath, base64Data) => {
    try {
        if (!filePath) {
            return { canceled: true };
        }

        fs.mkdirSync(path.dirname(filePath), {
            recursive: true
        });

        fs.writeFileSync(
            filePath,
            Buffer.from(base64Data, 'base64')
        );

        return {
            canceled: false,
            filePath
        };
    } catch (error) {
        console.error('Erro ao salvar arquivo:', error);
        throw error;
    }
});