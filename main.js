import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const loader = new GLTFLoader();
let CyberTruck;
let controls;

loader.load(
  './models/cybertruckFinal.glb',
  function (gltf) {
    CyberTruck = gltf.scene;
    CyberTruck.scale.set(7, 7, 7);
    scene.add(CyberTruck);
  }
);

let road;
loader.load(
  './models/Garage.glb',
  function (gltf) {
    road = gltf.scene;
    road.position.y = -0.9;
    road.scale.set(10, 10, 10);
    scene.add(road);
  }
);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loaderBack = new THREE.TextureLoader();

loaderBack.load(
  './backgrounds/skyboxStars.jpg',
  function (texture) {
    scene.background = texture;
  },
  undefined,
  function (error) {
    console.error('An error happened during loading texture:', error);
  }
);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  Space: false,
  c: false
};

let cameraOffset = new THREE.Vector3(0, 20, -100);

document.addEventListener('keydown', (event) => {
    if (keys[event.key] !== undefined) {
      keys[event.key] = true;
    }
  
    if (event.key === ' ' || event.key === 'Spacebar') {
      keys.Space = true;
      cameraOffset = new THREE.Vector3(0, 20, -100);
    }
  
    if (event.key === 'c' || event.key === 'C') {
      keys.cPressed = !keys.cPressed; // Toggle the 'c' key status
      console.log("'c' key status:", keys.cPressed);
  
      if (keys.cPressed) {
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI / 2;
        controls.target.copy(CyberTruck.position);
      } else {
        controls.dispose();
        controls = null;
      }
    }
  });

document.addEventListener('keyup', (event) => {
  if (keys[event.key] !== undefined) {
    keys[event.key] = false;
  }

  if (event.key === ' ' || event.key === 'Spacebar') {
    keys.Space = false;
    cameraOffset = new THREE.Vector3(0, 20, -100);
  }

  if (event.key === 'c') {
    keys.c = false;
    console.log("'c' key status:", keys.c);
  }
});

const moveSpeed = 1;
const rotateSpeed = 0.012;

function updateCyberTruck() {
  if (keys.ArrowUp) {
    let direction = new THREE.Vector3();
    CyberTruck.getWorldDirection(direction);
    CyberTruck.position.addScaledVector(direction, moveSpeed);
  }
  if (keys.ArrowDown) {
    let direction = new THREE.Vector3();
    CyberTruck.getWorldDirection(direction);
    CyberTruck.position.addScaledVector(direction, -moveSpeed);
  }
  if (keys.ArrowLeft && keys.ArrowUp) {
    CyberTruck.rotation.y += rotateSpeed;
  }
  if (keys.ArrowRight && keys.ArrowUp) {
    CyberTruck.rotation.y -= rotateSpeed;
  }
  if (keys.ArrowRight && keys.ArrowDown) {
    CyberTruck.rotation.y += rotateSpeed;
  }
  if (keys.ArrowLeft && keys.ArrowDown) {
    CyberTruck.rotation.y -= rotateSpeed;
  }
}

function animate() {
  requestAnimationFrame(animate);

  if (CyberTruck) {
    updateCyberTruck();

    if (keys.Space) {
      console.log("SPACE");
      cameraOffset = new THREE.Vector3(0, 20, 100);
    }

    const rotatedOffset = cameraOffset.clone();
    rotatedOffset.applyQuaternion(CyberTruck.quaternion);

    const desiredPosition = CyberTruck.position.clone().add(rotatedOffset);

    camera.position.lerp(desiredPosition, 0.1);
    camera.lookAt(CyberTruck.position);
  }

  renderer.render(scene, camera);
}

animate();
