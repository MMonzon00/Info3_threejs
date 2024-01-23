import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const loader = new GLTFLoader();
var startingCoordinates = { x: 0, y: 5, z: 0 };
// let both;
// loader.load(
//     './models/scene.gltf',function(gltf){
//         both=gltf.scene;
//         scene.add(both);
//     },
// );

let CyberTruck;
loader.load(
    './models/cybertruckFinal.glb',
    function (gltf) {
      CyberTruck = gltf.scene;
      CyberTruck.scale.set(7, 7, 7);
      CyberTruck.position.set(0, 0, 0);
      scene.add(CyberTruck);
    },
    // ... (progress and error callbacks)
  );
  
  let Garage;

  loader.load(
      './models/Garage1.glb',
      function (gltf) {
          Garage = gltf.scene;
          Garage.position.set(0, 0, 0);
          Garage.scale.set(10, 10, 10);
          scene.add(Garage);
      },
      // ... (progress and error callbacks)
  );

//Add ambient light
const ambientLight = new THREE.AmbientLight(0xFFFFFF,1);
ambientLight.position.set(5,5,5);
scene.add(ambientLight);

// Create a camera
const startingCoordinatesCamera = {x: -119.56577588279379, y: 27.17728918932099, z: 32.14970851068203};
const povCoords = {x: -44.21602280180338, y: 12.710755362794542, z: 31.43912203114417}
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(startingCoordinatesCamera.x, startingCoordinatesCamera.y, startingCoordinatesCamera.z);
camera.lookAt(scene.position);

// Flag to toggle camera position
let isInVehicleView = false;

document.addEventListener('keydown', (event) => {
    if (event.key === 'c' || event.key === 'C') {
        isInVehicleView = !isInVehicleView;

        if (isInVehicleView) {
            // Set camera inside the vehicle (adjust position based on your model)
            camera.position.set(povCoords.x, povCoords.y, povCoords.z);
            camera.rotateY(180)
            // Optional: Point the camera towards the front of the vehicle
            const frontOfVehicle = new THREE.Vector3(startingCoordinatesCamera.x, startingCoordinatesCamera.y, startingCoordinatesCamera.z);
            const rotationMatrix = new THREE.Matrix4();
            rotationMatrix.lookAt(camera.position, frontOfVehicle, new THREE.Vector3(0, 1, 0));
            const rotation = new THREE.Quaternion();
            rotation.setFromRotationMatrix(rotationMatrix);
            camera.quaternion.copy(rotation);
        } else {
            // Set camera to external view
            camera.position.set(startingCoordinatesCamera.x, startingCoordinatesCamera.y, startingCoordinatesCamera.z);
            camera.lookAt(scene.position);

        }
    }
});

// Create a renderer
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);


// add a pointLight
const CoordinatesLight = {x: -46.297855604328355, y: 13.870796319255302, z: 31.29556735021375}
const pointLight = new THREE.PointLight(0xffffff, 100000, 10); // color, intensity, distance
pointLight.position.set(startingCoordinatesCamera.x, startingCoordinatesCamera.y, startingCoordinatesCamera.z); // Position of the light
scene.add(pointLight);

// Rotation variables
const rotationSpeed = 0.02;


// Set up keyboard input
const keys = {};
document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});


const gui = new dat.GUI();

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0).normalize();
scene.add(directionalLight);

// Directional Light controls
const directionalLightFolder = gui.addFolder('Directional Light');
directionalLightFolder.add(directionalLight.position, 'x', -1, 1).step(0.1).name('X Position');
directionalLightFolder.add(directionalLight.position, 'y', -1, 1).step(0.1).name('Y Position');
directionalLightFolder.add(directionalLight.position, 'z', -1, 1).step(0.1).name('Z Position');
directionalLightFolder.add(directionalLight, 'intensity', 0, 2).step(0.1).name('Intensity');
directionalLightFolder.addColor(directionalLight, 'color').name('Color');
directionalLightFolder.open();

// Add dat.GUI controls for CyberTruck
const cyberTruckFolder = gui.addFolder('CyberTruck Controls');

// Initial values
let initialPosition = { x: 0, y: 0, z: 0 };

// // Add position controls
cyberTruckFolder.add(CyberTruck.position.x, 'x', -100, 100).step(0.1).name('X').setValue(initialPosition.x);
// cyberTruckFolder.add(CyberTruck.position, 'z', -100, 100).step(0.1).name('Z').setValue(initialPosition.z);


const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.copy(CyberTruck.position);
// You can adjust these settings to control the sensitivity of the controls
controls.rotateSpeed = 1.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 1;

// Optional: How far or how close can the camera zoom
controls.minDistance = 1;
controls.maxDistance = 500;

// Optional: To limit the vertical orbit angle (radians)
controls.minPolarAngle = 0;
controls.maxPolarAngle = Math.PI/2.01;

// Optional: To enable damping (inertia), which can give a smoother control feel
controls.enableDamping = true;
controls.dampingFactor = 0.05;

//////////////////////////////////////////////////////////////////////
// Create coordinate axes
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// Create lines for specific coordinates
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
const lineGeometryX = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, 0, 0)]);
const lineGeometryY = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0)]);
const lineGeometryZ = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 1)]);

const lineX = new THREE.Line(lineGeometryX, lineMaterial);
const lineY = new THREE.Line(lineGeometryY, lineMaterial);
const lineZ = new THREE.Line(lineGeometryZ, lineMaterial);

scene.add(lineX);
scene.add(lineY);
scene.add(lineZ);
//////////////////////////////////////////////////////////////////////

const loaderBack = new THREE.TextureLoader();

loaderBack.load(
    './backgrounds/skyboxStar.jpg', // Replace with your image path
    function (texture) {
        scene.background = texture; // Set the scene background to the loaded texture
    },
    undefined, // Optional: onProgress callback
    function (error) {
        console.error('An error happened during loading texture:', error);
    }
);

let cameraOffset = new THREE.Vector3(0,15, 25); // Notice the z-value is positive now

const moveSpeed = 0.3;
const rotateSpeed = 0.012;

// Set up key input
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'z':
            rotateCameraAroundPoint();
            break;
    }
});

// Function to rotate the camera around a specific point (e.g., origin)
function rotateCameraAroundPoint() {
    const rotateCoords = {x: -42.12114255160086, y: 1.958620733852893, z: 28.067148101582536}
    const pivot = new THREE.Vector3(rotateCoords.x, rotateCoords.y, rotateCoords.z); // The point to rotate around

    // Calculate the current distance and angle
    const distance = camera.position.distanceTo(pivot);
    const angle = Math.atan2(camera.position.x - pivot.x, camera.position.z - pivot.z);

    // Update the camera's position and rotation
    camera.position.x = pivot.x + distance * Math.cos(angle + 0.1); // 0.1 is the rotation angle
    camera.position.z = pivot.z + distance * Math.sin(angle + 0.1);
    camera.lookAt(pivot);
}

function animate() {
    requestAnimationFrame(animate);
    const worldCoordinates = new THREE.Vector3();
    camera.getWorldPosition(worldCoordinates);
    console.log('World Coordinates of Camera:', worldCoordinates);
    // var modelPosition = new THREE.Vector3();
    // modelPosition.setFromMatrixPosition(CyberTruck.matrixWorld);
    // console.log('Model Position:', modelPosition);
    controls.update();
    renderer.render(scene, camera);
}

animate();