// main.ts
// Import necessary modules from Three.js
import * as THREE from 'three';
// Create Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Add a Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
// Set Camera Position
camera.position.z = 5;
// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    // Rotate the Cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // Render the Scene
    renderer.render(scene, camera);
}
// Start Animation
animate();
// Handle Resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
