const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const directionalLight = new THREE.DirectionalLight(0xFFFF00, 0.8);
directionalLight.position.set(2, 0, 3); 
scene.add(directionalLight);

const degreesToRadians = (degrees) => {
	return degrees * (Math.PI / 180)
}

// создание цилиндрoв

let r = 1.2 // радиус сферы
let h = 0.5 // высота цилиндра
let rh = r + h/2; //расстояние от центра до крайней точки цилиндра
let arc = rh*Math.sin((Math.PI/4)); //смещение от точки до точки по сфере

function createCylinder( height ){
    const geometry = new THREE.CylinderGeometry( 0.1, 0.1, height, 20 ); 
    const material = new THREE.MeshBasicMaterial( {color: 0xf2a6bf, wireframe: true} ); 
    const cylinder = new THREE.Mesh( geometry, material );
    return cylinder;
}

const cylinderGeometry1 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial1 = new THREE.MeshBasicMaterial( {color: 0xf2a6bf, wireframe: true} ); 
const cylinder1= new THREE.Mesh( cylinderGeometry1, cylinderMaterial1 );
scene.add( cylinder1 );
cylinder1.position.x = rh;
cylinder1.position.y = 0;
cylinder1.position.z = 0;

cylinder1.rotation.x = 0;
cylinder1.rotation.y = 0;
cylinder1.rotation.z = degreesToRadians(90);

const cylinderGeometry2 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial2 = new THREE.MeshBasicMaterial( {color: 0xf2a6bf, wireframe: true} ); 
const cylinder2 = new THREE.Mesh( cylinderGeometry2, cylinderMaterial2 );
scene.add( cylinder2 );
cylinder2.position.x = -rh;
cylinder2.position.y = 0;
cylinder2.position.z = 0;

cylinder2.rotation.x = 0;
cylinder2.rotation.y = 0;
cylinder2.rotation.z = degreesToRadians(90);

const cylinderGeometry3 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial3 = new THREE.MeshBasicMaterial( {color: 0xf2a6bf, wireframe: true} ); 
const cylinder3 = new THREE.Mesh( cylinderGeometry3, cylinderMaterial3 );
scene.add( cylinder3 );
cylinder3.position.x = 0;
cylinder3.position.y = rh;
cylinder3.position.z = 0;

cylinder3.rotation.x = 0;
cylinder3.rotation.y = 0;
cylinder3.rotation.z = 0;

const cylinderGeometry4 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial4 = new THREE.MeshBasicMaterial( {color: 0xf2a6bf, wireframe: true} ); 
const cylinder4 = new THREE.Mesh( cylinderGeometry4, cylinderMaterial4 );
scene.add( cylinder4 );
cylinder4.position.x = 0;
cylinder4.position.y = -rh;
cylinder4.position.z = 0;

cylinder4.rotation.x = 0;
cylinder4.rotation.y = 0;
cylinder4.rotation.z = 0;

const cylinderGeometry5 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial5 = new THREE.MeshBasicMaterial( {color: 0xf2a6bf, wireframe: true} ); 
const cylinder5 = new THREE.Mesh( cylinderGeometry5, cylinderMaterial5 );
scene.add( cylinder5 );
cylinder5.position.x = 0;
cylinder5.position.y = 0;
cylinder5.position.z = rh;

cylinder5.rotation.x = degreesToRadians(90);
cylinder5.rotation.y = 0;
cylinder5.rotation.z = 0;

const cylinderGeometry6 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial6 = new THREE.MeshBasicMaterial( {color: 0xf2a6bf, wireframe: true} ); 
const cylinder6 = new THREE.Mesh( cylinderGeometry6, cylinderMaterial6 );
scene.add( cylinder6 );
cylinder6.position.x = 0;
cylinder6.position.y = 0;
cylinder6.position.z = -rh;

cylinder6.rotation.x = degreesToRadians(90);
cylinder6.rotation.y = 0;
cylinder6.rotation.z = 0;

const cylinderGeometry7 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial7 = new THREE.MeshBasicMaterial( {color: 0xb2a6f2, wireframe: true} ); 
const cylinder7 = new THREE.Mesh( cylinderGeometry7, cylinderMaterial7 );
scene.add( cylinder7);
cylinder7.position.x = arc;
cylinder7.position.y = arc;
cylinder7.position.z = 0;

cylinder7.rotation.x = 0;
cylinder7.rotation.y = 0;
cylinder7.rotation.z = degreesToRadians(-45); 

const cylinderGeometry8 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial8 = new THREE.MeshBasicMaterial( {color: 0xb2a6f2, wireframe: true} ); 
const cylinder8 = new THREE.Mesh( cylinderGeometry8, cylinderMaterial8 );
scene.add( cylinder8);
cylinder8.position.x = -arc;
cylinder8.position.y = arc;
cylinder8.position.z = 0;

cylinder8.rotation.x = 0;
cylinder8.rotation.y = 0;
cylinder8.rotation.z = degreesToRadians(45);

const cylinderGeometry9 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial9 = new THREE.MeshBasicMaterial( {color: 0xb2a6f2, wireframe: true} ); 
const cylinder9 = new THREE.Mesh( cylinderGeometry9, cylinderMaterial9 );
scene.add( cylinder9);
cylinder9.position.x = arc;
cylinder9.position.y = -arc;
cylinder9.position.z = 0;

cylinder9.rotation.x = 0;
cylinder9.rotation.y = 0;
cylinder9.rotation.z = degreesToRadians(45);;

const cylinderGeometry10 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial10 = new THREE.MeshBasicMaterial( {color: 0xb2a6f2, wireframe: true} ); 
const cylinder10 = new THREE.Mesh( cylinderGeometry10, cylinderMaterial10 );
scene.add( cylinder10);
cylinder10.position.x = -arc;
cylinder10.position.y = -arc;
cylinder10.position.z = 0;

cylinder10.rotation.x = 0;
cylinder10.rotation.y = 0;
cylinder10.rotation.z = degreesToRadians(-45);

const cylinderGeometry11 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial11 = new THREE.MeshBasicMaterial( {color: 0xa6f2d8, wireframe: true} ); 
const cylinder11 = new THREE.Mesh( cylinderGeometry11, cylinderMaterial11 );
scene.add( cylinder11);
cylinder11.position.x = 0;
cylinder11.position.y = arc;
cylinder11.position.z = arc;

cylinder11.rotation.x = degreesToRadians(45);
cylinder11.rotation.y = 0;
cylinder11.rotation.z = 0;

const cylinderGeometry12 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial12 = new THREE.MeshBasicMaterial( {color: 0xa6f2d8, wireframe: true} ); 
const cylinder12 = new THREE.Mesh( cylinderGeometry12, cylinderMaterial12 );
scene.add( cylinder12);
cylinder12.position.x = 0;
cylinder12.position.y = -arc;
cylinder12.position.z = arc;

cylinder12.rotation.x = degreesToRadians(-45);
cylinder12.rotation.y = 0;
cylinder12.rotation.z = 0;

const cylinderGeometry13 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial13 = new THREE.MeshBasicMaterial( {color: 0xa6f2d8, wireframe: true} ); 
const cylinder13 = new THREE.Mesh( cylinderGeometry13, cylinderMaterial13 );
scene.add( cylinder13);
cylinder13.position.x = 0;
cylinder13.position.y = -arc;
cylinder13.position.z = -arc;

cylinder13.rotation.x = degreesToRadians(45);
cylinder13.rotation.y = 0;
cylinder13.rotation.z = 0;

const cylinderGeometry14 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial14 = new THREE.MeshBasicMaterial( {color: 0xa6f2d8, wireframe: true} ); 
const cylinder14 = new THREE.Mesh( cylinderGeometry14, cylinderMaterial14 );
scene.add( cylinder14);
cylinder14.position.x = 0;
cylinder14.position.y = arc;
cylinder14.position.z = -arc;

cylinder14.rotation.x = degreesToRadians(-45);
cylinder14.rotation.y = 0;
cylinder14.rotation.z = 0;

const cylinderGeometry15 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial15 = new THREE.MeshBasicMaterial( {color: 0xb53a30, wireframe: true} ); 
const cylinder15 = new THREE.Mesh( cylinderGeometry15, cylinderMaterial15 );
scene.add( cylinder15);
cylinder15.position.x = arc;
cylinder15.position.y = 0;
cylinder15.position.z = arc;

cylinder15.rotation.x = 0;
cylinder15.rotation.y = degreesToRadians(-45);
cylinder15.rotation.z = degreesToRadians(90);

const cylinderGeometry16 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial16 = new THREE.MeshBasicMaterial( {color: 0xb53a30, wireframe: true} ); 
const cylinder16 = new THREE.Mesh( cylinderGeometry16, cylinderMaterial16 );
scene.add( cylinder16);
cylinder16.position.x = -arc;
cylinder16.position.y = 0;
cylinder16.position.z = arc;

cylinder16.rotation.x = 0;
cylinder16.rotation.y = degreesToRadians(45);
cylinder16.rotation.z = degreesToRadians(90);

const cylinderGeometry17 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial17 = new THREE.MeshBasicMaterial( {color: 0xb53a30, wireframe: true} ); 
const cylinder17 = new THREE.Mesh( cylinderGeometry17, cylinderMaterial17 );
scene.add( cylinder17);
cylinder17.position.x = -arc;
cylinder17.position.y = 0;
cylinder17.position.z = -arc;

cylinder17.rotation.x = 0;
cylinder17.rotation.y = degreesToRadians(-45);
cylinder17.rotation.z = degreesToRadians(90);

const cylinderGeometry18 = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 20 ); 
const cylinderMaterial18 = new THREE.MeshBasicMaterial( {color: 0xb53a30, wireframe: true} ); 
const cylinder18 = new THREE.Mesh( cylinderGeometry18, cylinderMaterial18 );
scene.add( cylinder18);
cylinder18.position.x = arc;
cylinder18.position.y = 0;
cylinder18.position.z = -arc;

cylinder18.rotation.x = 0;
cylinder18.rotation.y = degreesToRadians(45);
cylinder18.rotation.z = degreesToRadians(90);

// создание сферы
const sphereGeometry = new THREE.SphereGeometry( 1.2, 50, 30 );
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xe5f2a6, wireframe: true } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );

// создание куба
const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const cubeMaterial = new THREE.MeshNormalMaterial(); 
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial ); 
scene.add( cube );


function animate() {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    const angle = Date.now() * 0.001;
    camera.position.x = Math.sin(angle) * 3;
    camera.position.y = Math.sin(angle) * 3;
    
    camera.lookAt(sphere.position);
    renderer.render(scene, camera);
 }
 
 animate();
 