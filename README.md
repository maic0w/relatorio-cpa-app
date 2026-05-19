# relatorio-cpa-app

Aplicação desktop (Electron) para gerar relatórios de autoavaliação da Comissão Própria de Avaliação (CPA) do Instituto Federal de Sergipe a partir de formulários CSV.

**Resumo**
- **Propósito:** Processar os dados exportados dos formulários (CSV), gerar visualizações e permitir exportação/empacotamento como aplicativo desktop.
- **Stack:** Node.js + Electron; processamento CSV em `src/backend/`; interface em `src/frontend/`.

**Funcionalidades principais**
- Leitura e processamento de arquivos CSV de diferentes perfis (`data/data_discente.csv`, `data/data_docente.csv`, `data/data_tec_adm.csv`).
- Geração de gráficos/visualizações (usando `plotly.js-dist`).
- Empacotamento da aplicação com `electron-builder` para distribuição.

**Estrutura do repositório**
- [src/backend/main.js](src/backend/main.js): Entrada principal do Electron.
- [src/backend/preload.js](src/backend/preload.js): API segura entre renderer e main.
- [src/backend/dataProcessor.js](src/backend/dataProcessor.js): Lógica de leitura e transformação dos CSVs.
- [src/backend/constants.js](src/backend/constants.js): Constantes e caminhos usados no backend.
- [src/frontend/index.html](src/frontend/index.html): Interface do usuário.
- [src/frontend/renderer.js](src/frontend/renderer.js): Código frontend que consome a API do preload.
- [data/](data/): Contém os CSVs de entrada (não versionados — ver .gitignore).

**Requisitos**
- Node.js (recomendado 16.x ou compatível com a versão do Electron listada em `package.json`).
- npm (ou yarn).

**Instalação e execução (desenvolvimento)**
1. Instale dependências:

```bash
npm install
```

2. Execute a aplicação em modo desenvolvimento (abre a janela Electron):

```bash
npm start
```

**Gerar build (distribuição)**

```bash
npm run build
```

Observação: o processo de build usa `electron-builder` e inclui a pasta `data` como `extraResources` (veja `package.json`) — para fins de desenvolvimento, os CSVs locais não são versionados (estão no `.gitignore`). Se quiser incluir dados específicos no build, remova-os do `.gitignore` antes do commit.

**Formato dos dados (CSV)**
- Arquivos esperados: `data_discente.csv`, `data_docente.csv`, `data_tec_adm.csv`.
- Cada CSV deve possuir cabeçalho com campos consistentes; o processador espera colunas padronizadas (ver [src/backend/dataProcessor.js](src/backend/dataProcessor.js)).

**Como adicionar/atualizar dados**
1. Coloque os arquivos CSV na pasta `data/` (localmente — não serão commitados automaticamente por `.gitignore`).
2. Reinicie a aplicação (`npm start`) para que os novos dados sejam carregados.

**Desenvolvimento e contribuições**
- Execute `npm install` para preparar o ambiente.
- Abra o projeto no seu editor preferido e modifique os arquivos em `src/`.
- Para empacotar e testar o instalador no Windows, use `npm run build` (requer configurações adicionais do `electron-builder` se quiser targets extras).

**Observações de privacidade e segurança**
- Os arquivos na pasta `data/` frequentemente contêm informações sensíveis; por isso, por padrão, esta pasta está ignorada pelo Git. Garanta que apenas dados autorizados sejam compartilhados.

**Arquivos criados/alterados**
- `.gitignore`: adiciona `data/` à lista de arquivos ignorados.
- `README.md`: documentação detalhada (este arquivo).

Se precisar, posso adicionar exemplos de CSV, scripts de testes automáticos ou instruções para empacotar builds para macOS/Linux.
