import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth , innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const color = new THREE.MeshBasicMaterial({ color: 0x60F5D3 });
const cube = new THREE.Mesh(geometry, color);
console.log("Yes am in")
console.log("Right")
scene.add(cube);
camera.position.z = 3;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
