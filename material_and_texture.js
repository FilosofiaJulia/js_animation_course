const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

// Подключите текстуры
const texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/timoxley/threejs/master/examples/textures/land_ocean_ice_cloud_2048.jpg' ); 
const material = new THREE.MeshBasicMaterial( { map:texture } );

const geometry = new THREE.SphereGeometry(3, 32, 32);
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
sphere.position.y = 3;

function createCircle(material, x, y) {
    const geometry = new THREE.CircleGeometry( 0.5, 32 );
    const materialCircle = material; 
    const circle = new THREE.Mesh( geometry, materialCircle); 
    scene.add( circle );
    circle.position.x = x;
    circle.position.y = y;
    function animateCircle() {
        requestAnimationFrame(animateCircle);
        circle.rotation.x += 0.03;
        circle.rotation.y += 0.03;
        renderer.render(scene, camera);
    }
    animateCircle();
}

createCircle(new THREE.MeshBasicMaterial( { color: 0x3628d7 } ), -1.5, -1);
createCircle(new THREE.MeshLambertMaterial( { color: 0x3628d7 } ), 0, -1);
createCircle(new THREE.MeshPhongMaterial( { color: 0x3628d7 } ), 1.5, -1);

createCircle(new THREE.MeshPhongMaterial( { color: 0x3628d7,  shininess: 0 } ), -1.5, -2.5);
createCircle(new THREE.MeshPhongMaterial( { color: 0x3628d7,  shininess: 30 } ), 0, -2.5);
createCircle(new THREE.MeshPhongMaterial( { color: 0x3628d7,  shininess: 150 } ), 1.5, -2.5);

createCircle(new THREE.MeshStandardMaterial( { color: 0x3628d7,  roughness: 0, metalness: 0 } ), -1.5, -4);
createCircle(new THREE.MeshStandardMaterial( { color: 0x3628d7,  roughness: 0.5, metalness: 0.5 } ), 0, -4);
createCircle(new THREE.MeshStandardMaterial( { color: 0x3628d7,  roughness: 1, metalness: 1 } ), 1.5, -4);

const lightDirectional = new THREE.DirectionalLight(0xffffff, 1);
scene.add(lightDirectional);
lightDirectional.position.set(2,0,10);

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.005;
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});