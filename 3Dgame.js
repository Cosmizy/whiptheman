"use strict";
// Create the scene
const scene = new THREE.Scene();
// Set up the camera
const camera = new THREE.PerspectiveCamera(75, // Field of view
window.innerWidth / window.innerHeight, // Aspect ratio
0.1, // Near clipping plane
1000 // Far clipping plane
);
// Create the renderer and attach it to the document
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// Create a cube and add it to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
// Position the camera
camera.position.z = 5;
// Animation loop function
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
// Start the animation
animate();
// Adjust the rendering when the window is resized
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
