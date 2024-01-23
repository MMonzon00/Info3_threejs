# Informatica 3, CyberTruck (Monzón)

Trabajo de modelado del vehículo y importación a threejs donde se añadió interactividad al modelo.

## Requisitos Previos

Asegúrese de tener instalado lo siguiente en su máquina:

- Node.js: [Descargar Node.js](https://nodejs.org/)
- NPX: NPX viene con Node.js, pero asegúrese de tener una versión actualizada.

## Configuración del Entorno

Siga estos pasos para configurar y ejecutar el proyecto localmente:

1. **Clonar el Repositorio:**

    ```bash
    https://github.com/MMonzon00/Info3_threejs
    cd Info3_threejs
    ```

2. **Instalar Dependencias:**

    ```bash
    npm install
    ```

3. **Iniciar el Servidor de Desarrollo con Vite:**

    ```bash
    npx create-vite
    ```

    Esto iniciará el servidor de desarrollo en `http://localhost:3000`. Abra este enlace en su navegador para ver la aplicación.

## Comandos Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite.

## Estructura del Proyecto

Este proyecto utiliza Blender para modelar el CyberTruck y Three.js para integrar y hacer interactiva la visualización del modelo 3D en un entorno web.

- **`/backgrounds`**: Contiene las imágenes o texturas para el fondo.
- **`/models`**: Contiene los archivos del modelo 3D del CyberTruck creado con Blender.
- **`/node_modules`**: Directorio de dependencias de Node.js.
- **`index.html`**: Página principal de la aplicación.
- **`main.js`**: Código principal de la aplicación Three.js.
- **`package-lock.json`**: Archivo de bloqueo de versiones de dependencias.
- **`package.json`**: Archivo de configuración de Node.js y dependencias.
- **`style.css`**: Estilos CSS para la aplicación.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENSE.md](LICENSE.md) para más detalles.
