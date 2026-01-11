# Drumkit — 02-Drumkit

Descripción breve

Un pequeño proyecto de drumkit que reproduce sonidos con las teclas A S D F G H J K L 

## Estructura

- index.html — Página principal con la UI y el script para reproducir sonidos y secuencias.
- styles.css — Estilos del drumkit (diseño responsivo, animaciones para pads y botón).
- sounds/ — Carpeta con archivos de audio (.wav) usados por el drumkit.


## Uso

1. Abre `index.html` en tu navegador (por ejemplo arrastrando el archivo o con un servidor local).
2. Presiona las teclas A S D F G H J K L para tocar los pads.
3. Haz clic en el botón "Tocar pieza" para reproducir una secuencia predefinida.

> Nota: Algunas versiones del navegador requieren servir archivos desde un servidor local para permitir la reproducción de audio correctamente (por ejemplo `npx http-server` o usar el Live Server de VS Code).

## Desarrollo

- Añade nuevos sonidos copiando archivos a la carpeta `sounds/` y añadiendo nuevas etiquetas `<audio data-key="XX" src="sounds/archivo.wav"></audio>` en `index.html` y un pad `<div data-key="XX" class="key">...</div>`.

