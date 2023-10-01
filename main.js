import * as THREE from "three";

//Scene
const scene =  new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
scene.add(camera)
camera.position.z = 5

//Rendere

const renderer =  new THREE.WebGLRenderer({antialias: false})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xfffff, 1)
document.body.appendChild(renderer.domElement)

let ambientLight=  new THREE.AmbientLight(0x101010,1.0)

// ambientLight.position = camera.position
scene.add(ambientLight)

let sunLight = new THREE.DirectionalLight(0xdddddd,1.0)
sunLight.position.y = 15
scene.add(sunLight)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color : 'blue'})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
 document.addEventListener('keydown',onKeyDown,false)

 function onKeyDown(event){
    let keycode = event.which;

    if(keycode === 39){
        camera.translateX(-0.05)
    }
    else if(keycode === 37){
        camera.translateX(0.05)
    }
    else if(keycode === 38){
        camera.translateY(-0.05)
    }
    else if(keycode === 40){
        camera.translateY(0.05)
    }
 }
 let render = function(){
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene,camera)
    requestAnimationFrame(render)

 }
 render()