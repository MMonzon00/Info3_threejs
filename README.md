# Informatica 3, CyberTruck (Monzón)

Trabajo de modelado del vehículo y importación a threejs donde se añadió interactividad al modelo.

## Requisitos Previos

Asegúrese de tener instalado lo siguiente en su máquina:

- Node.js: [Descargar Node.js](https://nodejs.org/)

## Configuración del Entorno

Siga estos pasos para configurar y ejecutar el proyecto localmente:

1. **Clonar el Repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/tu-proyecto.git
    cd tu-proyecto
    ```

2. **Instalar Dependencias:**

    ```bash
    npm install
    ```

3. **Iniciar el Servidor de Desarrollo:**

    ```bash
    npm run dev
    ```

    Esto iniciará el servidor de desarrollo en `http://localhost:3000`. Abra este enlace en su navegador para ver la aplicación.

4. **Construir la Aplicación para Producción:**

    ```bash
    npm run build
    ```

    Esto generará los archivos optimizados para producción en el directorio `dist`.

## Comandos Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.

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

## Modelado del CyberTruck con Blender

El modelo 3D del CyberTruck fue creado utilizando Blender. Los archivos resultantes se encuentran en el directorio `/models`. Si deseas realizar modificaciones al modelo, abre el archivo `.blend` en Blender y realiza las ediciones necesarias.

## Integración con Three.js

La integración del modelo en Three.js se realiza en el archivo `main.js`. Puedes explorar y modificar este archivo para adaptar la interactividad según tus necesidades.

## Contribuciones

¡Te animamos a contribuir al proyecto! Si tienes sugerencias, correcciones o nuevas características, sigue los pasos descritos en la sección de Contribuciones.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENSE.md](LICENSE.md) para más detalles.
