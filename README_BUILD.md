Building an executable (Windows) and changing the app icon

1) Install dependencies

```powershell
npm install
```

2) Add your application icon

- Prepare a Windows icon file (`.ico`) containing the common sizes (16x16, 32x32, 48x48, 256x256).
- Place it at `build/icon.ico` in the project root. Create the `build/` folder if it doesn't exist.

3) Build the installer (NSIS) or portable build

```powershell
# NSIS installer (default target)
npm run build

# Explicit Windows build
npm run dist

# Portable single executable
npm run dist:portable
```

4) Output

- Artifacts are created in `dist/` by default (installer `.exe`, portable `.exe`, etc.).

Notes and tips

- You can customize `build` section in `package.json` for other platforms (macOS, Linux).
- Make sure `electron` and `electron-builder` versions are compatible. If build fails, update to supported versions.
- To change the application icon later, replace `build/icon.ico` and rebuild.

If you want, I can:
- Add a sample icon file placeholder (SVG/PNG) and a quick script to convert to `.ico` using `png-to-ico`.
- Run a local build here (if you want me to attempt building inside this environment).