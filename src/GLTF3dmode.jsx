import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three-stdlib";

export default function GLTF3dmode() {
  const mountRef = useRef(null);
  let modelRef = useRef(null);
  useEffect(() => {
    if (!mountRef.current) return; // Ensure mountRef is not null

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();
    scene.background = null;
    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 30, 40);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Damping for smoother controls
    controls.dampingFactor = 0.25; // Adjust damping speed
    controls.enableZoom = true;

    // AxesHelper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // Scene light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft white light
    scene.add(ambientLight);

    // GLTFLoader
    const loader = new GLTFLoader();
    loader.load("/3d_printer/scene.gltf", (gltf) => {
      const model = gltf.scene;
      scene.add(model);
      modelRef.current = model;
      // Set the position, rotation, and scale of the model
      model.position.set(0, 0, 0);
      model.rotation.set(0, 0, 0);
      model.scale.set(1.1, 1.1, 1.1);
    });

    // Resize handling
    const handleResize = () => {
      if (mountRef.current) {
        renderer.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight
        );
        camera.aspect =
          mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
        // Adjust rotation speed here
      }

      // Update OrbitControls
      controls.update();

      // Render the scene
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();

      if (renderer.domElement && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []); // Run only once when component mounts

  return (
    <div
      className="w-full h-full rounded-2xl  flex justify-center items-center"
      ref={mountRef}
    ></div>
  );
}
