# Informatica 3, CyberTruck (Monzón)

Trabajo de modelado del vehículo y importación a threejs donde se añadió interactividad al modelo.

## Requisitos Previos

Asegúrese de tener instalado lo siguiente en su máquina:

- Node.js: [Descargar Node.js](https://nodejs.org/)
- NPX: NPX viene con Node.js, pero asegúrese de tener una versión actualizada.

## Configuración del Entorno

Siga estos pasos para configurar y ejecutar el proyecto localmente:

1. Instalar curl:
```
sudo apt update && sudo apt upgrade
```
```
sudo apt install curl
```

2. Verificar la instalacion ejecutando:
```
curl --version
```

3. Instalar el manejador de versiones de Node.js (nvm) por medio de curl
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

4. Instalar Node.js y npm:
```
nvm install --lts
```

5.Verificar la instalacion ejecutando: 
```
node --version` y `npm --version`
```


6. Instalar git:
```
sudo apt-get install git
```


7. Verificar la instalacion ejecutando:
```
git --version
```


8. Clonar el repositorio e ir a la carpeta base:
```
git clone https://github.com/MMonzon00/Info3_threejs
```
```
cd Info3_threejs
```
## Con npx vite:

9. Instalacion de dependencias:
```
npm install
```

10. Ejecutar el proyecto:
```
npx vite
```

11. Visualizar el proyecto en el navegador yendo a la url: `http://localhost:5173/`


## Con npm run dev:

9. Instalacion de dependencias:
```
npm install
```

10. Ejecutar el proyecto:
```
npm run dev
```

11. Visualizar el proyecto en el navegador yendo a la url: `http://localhost:5173/`

## Con npx serve (utilizando un CDN):

9. Ejecutar el comando:
```
npx serve
```

10. Visualizar el proyecto en el navegador yendo a la url: `http://localhost:3000/`

Esto iniciará el servidor de desarrollo en `http://localhost:3000`. Abra este enlace en su navegador para ver la aplicación.

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
