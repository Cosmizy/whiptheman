// Import Three.js modules
import * as THREE from 'three';
// Create a scene
const scene = new THREE.Scene();
// Set up a camera
const camera = new THREE.PerspectiveCamera(75, // Field of view
window.innerWidth / window.innerHeight, // Aspect ratio
0.1, // Near clipping plane
1000 // Far clipping plane
);
// Set up a renderer and attach it to the document
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Add a cube to the scene
const geometry = new THREE.BoxGeometry(); // Define the shape
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Define the material (color)
const cube = new THREE.Mesh(geometry, material); // Create the mesh by combining shape and material
scene.add(cube); // Add the cube to the scene
// Position the camera
camera.position.z = 5;
// Animation loop function
function animate() {
    requestAnimationFrame(animate); // Request the next frame
    // Add rotation for some basic animation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    // Render the scene through the camera
    renderer.render(scene, camera);
}
// Start the animation loop
animate();
// Handle window resizing
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight); // Update renderer size
    camera.aspect = window.innerWidth / window.innerHeight; // Update camera aspect ratio
    camera.updateProjectionMatrix();
});
