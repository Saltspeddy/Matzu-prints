//"Parallelepipod - 3D printer"
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three-stdlib";

export default function GLTF3dmode() {
  const mountRef = useRef(null);
  const mountedRef = useRef(true);
  useEffect(() => {
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 50, 50);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Damping for smoother controls
    controls.dampingFactor = 0.25; // Adjust damping speed
    controls.enableZoom = true;

    // AxesHelper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // GLTFLoader
    const loader = new GLTFLoader();
    loader.load("src/assets/scene.gltf", (geometry) => {
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Set the position, rotation, and scale of the mesh
      mesh.position.set(0, 0, 0);
      mesh.rotation.set(0, 0, 0);
      mesh.scale.set(1, 1, 1);
    });

    // Resize handling
    const handleResize = () => {
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update OrbitControls
      controls.update();

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      mountedRef.current = false; // Mark as unmounted
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="w-full h-[20rem] rounded-2xl" ref={mountRef}></div>;
}
