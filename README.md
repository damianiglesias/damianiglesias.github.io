# Damian Iglesias — Portfolio

Portfolio personal minimalista con scroll interactivo, animaciones CSS y cursor personalizado.

## 🚀 Cómo subir a GitHub Pages

### Opción A — Reemplazar el repo actual (más sencillo)

1. Clona tu repo actual:
```bash
git clone https://github.com/damianiglesias/damianiglesias.github.io
cd damianiglesias.github.io
```

2. Borra todo y copia el nuevo `index.html`:
```bash
rm -rf *
# Copia aquí el archivo index.html
```

3. Sube los cambios:
```bash
git add .
git commit -m "feat: new portfolio design"
git push origin main
```

4. En 1-2 minutos estará live en: https://damianiglesias.github.io

---

### Opción B — Desde cero con un repo nuevo

```bash
git init
git add index.html
git commit -m "initial portfolio"
git branch -M main
git remote add origin https://github.com/damianiglesias/damianiglesias.github.io.git
git push -u origin main
```

Luego en Settings → Pages → Branch: main → / (root) → Save.

---

## ✏️ Personalización

| Qué cambiar | Dónde está en el HTML |
|---|---|
| Email de contacto | `href="mailto:contact@damianiglesias.dev"` |
| Stats de About | Sección `.about-stats` |
| Proyectos | Sección `#projects` — cada `.project-item` |
| Color accent | Variable CSS `--accent: #c8f55a` en `:root` |
| Fondo | Variable CSS `--bg: #0a0a0a` |

## 🎨 Cambiar color accent

En el CSS, busca `:root` y cambia `--accent`. Ejemplos:
- Azul eléctrico: `#5af5f5`
- Naranja: `#f5a05a`
- Rosa: `#f55a9b`
- Blanco puro: `#ffffff`
