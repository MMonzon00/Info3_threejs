# Nombre del Proyecto

Descripción corta del proyecto.

## Requisitos Previos

Asegúrese de tener instalado lo siguiente en su máquina:

- Node.js: [Descargar Node.js](https://nodejs.org/)
- NPX: NPX viene con Node.js, pero asegúrese de tener una versión actualizada.

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
    npx vite
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

- **`/models`**: Contiene los archivos del modelo 3D del CyberTruck creado con Blender.
- **`/src`**: Directorio principal de código fuente de la aplicación Three.js.
  - **`/src/components`**: Componentes de la aplicación.
  - **`/src/scenes`**: Escenas de Three.js que contienen la lógica principal.
  - **`/src/utils`**: Utilidades y funciones auxiliares.

## Modelado del CyberTruck con Blender

El modelo 3D del CyberTruck fue creado utilizando Blender. Los archivos resultantes se encuentran en el directorio `/models`. Si deseas realizar modificaciones al modelo, abre el archivo `.blend` en Blender y realiza las ediciones necesarias.

## Integración con Three.js

La integración del modelo en Three.js se realiza en el directorio `/src`. Puedes explorar y modificar los componentes y escenas para adaptar la interactividad según tus necesidades.

## Comandos Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.

## Contribuciones

¡Te animamos a contribuir al proyecto! Si tienes sugerencias, correcciones o nuevas características, sigue los pasos descritos en la sección de Contribuciones.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENSE.md](LICENSE.md) para más detalles.
