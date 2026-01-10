# Advice Generator — Vanilla JS 🚀

**Pequeño proyecto** que consume la API pública de Advice Slip (https://api.adviceslip.com) para mostrar consejos aleatorios en la página. Incluye un loader visual y accesibilidad básica mientras se obtiene el consejo.

---

## 🧭 Estructura del proyecto

- `index.html` — marcado principal (contenedor para el advice, loader y botón).
- `src/main.js` — lógica de la UI: llama a la API, muestra el loader, gestiona estados (deshabilita el botón mientras carga) y actualiza el DOM.
- `src/apiAdvice.js` — wrapper pequeño para la llamada `fetch` a la API de Advice Slip.
- `src/styles.css` — estilos y animación del loader.
- `package.json` — script para servir el proyecto localmente.

---

## ▶️ Cómo ejecutar

1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta:

```bash
npm start
```

3. Se abrirá el navegador con `index.html`. También puedes usar `npx http-server -c-1 . -o` si lo prefieres.

---

## ✅ Funcionalidades importantes

- Muestra un **loader** (`.loader`) mientras se realiza la petición a la API.
- El botón `#roll` se **deshabilita** durante la petición y su estilo cambia a gris para indicar el estado (CSS `button:disabled`).
- Mejora de accesibilidad: el contenedor `#message` usa `aria-live` y se añade/remueve `aria-busy` durante la carga.
- Manejo básico de errores: si la petición falla, se muestra un mensaje de error friendly.

---

## 🔧 Cambios recientes (implementados)

- Lógica en `src/main.js` para mostrar/ocultar el loader y deshabilitar el botón durante la petición.
- Reglas CSS para que el botón aparezca gris y no tenga efecto hover cuando esté deshabilitado.

---

## 💡 Sugerencias de mejora

- Mostrar texto en el botón (por ejemplo `Loading…`) mientras está deshabilitado.
- Añadir animación/ícono SVG como loader para mayor control visual.
- Añadir tests unitarios y end-to-end.
- Manejar estados de error más detallados (reintento, mensajes específicos).

---

## 📄 Licencia

Proyecto con fines educativos; añade una licencia si planeas distribuirlo.

---
