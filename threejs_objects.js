// создание сцены
const scene = new THREE.Scene();
// создание камеры
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
//отрисовка
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('objects').appendChild( renderer.domElement );
// направленный свет
const directionalLight = new THREE.DirectionalLight(0xFFFF00, 0.8);
directionalLight.position.set(2, 0, 3); 
scene.add(directionalLight);
// создание сферы
const sphereGeometry = new THREE.SphereGeometry( 1.2, 50, 50 );
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xFF0000, wireframe: true } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.position.x = -3;
scene.add( sphere );
// создание куба
const cubeGeometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 ); 
const cubeMaterial = new THREE.MeshNormalMaterial(); 
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial ); 
scene.add( cube );
cube.position.x = 3;
cube.rotation.y = 0.5;
// создание конуса
const coneGeometry = new THREE.ConeGeometry(1, 2, 32);
const coneMaterial = new THREE.MeshStandardMaterial({ color: 0xB7F46E });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
scene.add(cone);
cone.position.z = -1;
cone.rotation.x = 16;

// переменная для анимации движения
let distance = true;

function animate(){
	requestAnimationFrame( animate );
	moveSideFigures(cube);
	moveSideFigures(sphere);
	cone.rotation.y -= 0.01;
	// отрисовка всей сцены
	renderer.render( scene, camera );
}

animate();

// анимация движения боковых фигур
function moveSideFigures(figure) {
	if (distance) {
		figure.rotation.x -= 0.01;
		figure.position.z -= 0.01;
		figure.position.y += 0.01;

		if (figure.position.z < -2) {
			distance = false;
		}
	} else {
		figure.rotation.x += 0.01;
		figure.position.z += 0.01;
		figure.position.y -= 0.01;
        
		if (figure.position.z > 1) {
			distance = true;
		}
	}
}