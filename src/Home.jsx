import { useRef, useEffect } from "react";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { STLLoader } from "three-stdlib";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
camera.position.set(0, 50, 50);
orbit.update();

try {
  const loader = new STLLoader();
  loader.load("src/assets/cerc.stl", function (geometry) {
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    mesh.position.set(0, 0, 0);
    mesh.rotation.set(0, 0, 0);
    mesh.scale.set(1, 1, 1);
  });
} catch (error) {
  console.error("An error occurred while loading the STL file:", error);
}

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

export default function Home() {
  const mountRef = useRef(null);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
  return (
    <div>
      <div className="h-screen w-screen absolute top-0 left-0 bg-white opacity-30 z-10">
        {" "}
      </div>
      <div
        className=" h-screen w-screen flex justify-between p-24 items-center bg-center bg-cover bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            'url("https://filamatrix.com/wp-content/uploads/2021/11/Filamatrix-117794-3D-Printing-Filaments-blogbanner1.jpg")',
        }}
      >
        <div className="min-h-[40vh] w-[35vw] bg-white rounded-3xl text-black p-8 text-8xl ">
          {" "}
          Let go of your Imagination and start printing!
        </div>
        <div className="min-h-[40vh] w-[35vw] bg-white rounded-3xl text-black p-8">
          <h1>Drop here your file and we will print them for you!</h1>
          <div ref={mountRef} className="w-full h-[20rem]"></div>
        </div>
      </div>
    </div>
  );
}
