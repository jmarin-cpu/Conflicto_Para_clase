# Plan de desarrollo

El proyecto parte de la plantilla inicial de Angular. Se desarrollará una aplicación web sencilla de temática viajera, organizada en los componentes `header`, `main` y `footer`, siguiendo las convenciones de `AGENTS.md`.

- [x] T1: Crear la estructura de los tres componentes standalone con Angular CLI.
    - Archivos: crear `src/app/header/header.ts`, `src/app/header/header.html`, `src/app/header/header.css`, `src/app/main/main.ts`, `src/app/main/main.html`, `src/app/main/main.css`, `src/app/footer/footer.ts`, `src/app/footer/footer.html` y `src/app/footer/footer.css`.
    - Hecho cuando: existen los tres componentes en las rutas indicadas, son standalone y mantienen separados TypeScript, HTML y CSS.
- [x] T2: Desarrollar la cabecera con identidad visual viajera y navegación sencilla.
    - Archivos: modificar `src/app/header/header.ts`, `src/app/header/header.html` y `src/app/header/header.css`.
    - Hecho cuando: la cabecera muestra el nombre o identidad de la aplicación y enlaces de navegación coherentes con el contenido; Angular compila con `ng build`.
- [x] T3: Crear el contenido principal de temática viajera.
    - Archivos: modificar `src/app/main/main.ts`, `src/app/main/main.html` y `src/app/main/main.css`.
    - Hecho cuando: el área principal presenta contenido claro relacionado con viajes y una composición adaptable a pantallas pequeñas; Angular compila con `ng build`.
- [x] T4: Desarrollar el pie de página y su presentación visual.
    - Archivos: modificar `src/app/footer/footer.ts`, `src/app/footer/footer.html` y `src/app/footer/footer.css`.
    - Hecho cuando: el pie de página completa la estructura visual de la aplicación y se adapta al diseño; Angular compila con `ng build`.
- [x] T5: Integrar la cabecera, el contenido principal y el pie en la aplicación raíz.
    - Archivos: modificar `src/app/app.ts`, `src/app/app.html` y `src/app/app.css`.
    - Hecho cuando: la plantilla inicial de Angular se sustituye por los tres componentes, sus imports están correctamente declarados y no se añaden componentes, servicios ni rutas; Angular compila con `ng build`.
- [x] T6: Ajustar los estilos globales y verificar la aplicación integrada.
    - Archivos: modificar `src/styles.css` y, si la integración lo requiere, `src/app/app.css`.
    - Hecho cuando: la tipografía, colores, espaciado y comportamiento adaptable son coherentes en toda la página, y `ng build` termina sin errores.
