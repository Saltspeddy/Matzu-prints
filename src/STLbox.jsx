import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three-stdlib";

export default function STLbox({ modelUrl }) {
  const mountRef = useRef(null);
  const [totalVolume, setTotalVolume] = useState(0);
  const [weightInGrams, setWeightInGrams] = useState(0);
  const [filamentLength, setFilamentLength] = useState(0);

  useEffect(() => {
    if (!modelUrl) return; // Ensure there's a modelUrl before continuing

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
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // AxesHelper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // STLLoader
    const loader = new STLLoader();
    let mesh;
    if (modelUrl instanceof ArrayBuffer) {
      // Using loader.parse when modelUrl is an ArrayBuffer (from uploaded file)
      const geometry = loader.parse(modelUrl);
      const material = new THREE.MeshNormalMaterial();
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      calculateVolume(geometry); // Calculate volume after the geometry is loaded
    } else {
      console.error("Expected ArrayBuffer, but got:", typeof modelUrl);
    }

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
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Volume Calculation
    function calculateVolume(geometry) {
      let totalVolume = 0;
      geometry.computeVertexNormals();
      const positions = geometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 9) {
        const v0 = new THREE.Vector3(
          positions[i],
          positions[i + 1],
          positions[i + 2]
        );
        const v1 = new THREE.Vector3(
          positions[i + 3],
          positions[i + 4],
          positions[i + 5]
        );
        const v2 = new THREE.Vector3(
          positions[i + 6],
          positions[i + 7],
          positions[i + 8]
        );

        const volume = v0.dot(v1.cross(v2)) / 6;
        totalVolume += volume;
      }
      totalVolume = Math.round(Math.abs(totalVolume));
      console.log(totalVolume);
      setTotalVolume(totalVolume);
      estimateFilamentUsage(totalVolume);
    }

    // Filament Estimation
    function estimateFilamentUsage(
      volumeInCubicMM,
      filamentDiameter = 1.75,
      filamentDensity = 1.25
    ) {
      // Volume of filament (cylinder) per millimeter
      const radius = filamentDiameter / 2;
      const crossSectionArea = Math.PI * Math.pow(radius, 2); // Area in square mm

      // Convert volume to grams using the density of the filament
      const volumeInCubicCM = volumeInCubicMM / 1000; // Convert cubic mm to cubic cm
      const weightInGrams = volumeInCubicCM * filamentDensity; // Weight in grams
      setWeightInGrams(weightInGrams);
      console.log(weightInGrams);
      // Calculate filament length in mm
      const filamentLength = volumeInCubicMM / crossSectionArea; // Length in mm
      setFilamentLength(filamentLength);
      console.log(filamentLength);
    }

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [modelUrl]); // Effect runs whenever modelUrl changes

  return (
    <div className="w-full h-[20rem] rounded-2xl flex">
      <div className="w-[30rem] h-[20rem]" ref={mountRef}></div>
      <div>
        <h1 className="text-xl font-semibold">Volume:</h1>
        <p>{totalVolume.toFixed(2)} cubic mm</p>
        <h1 className="text-xl font-semibold">Filament weight:</h1>
        <p>{weightInGrams.toFixed(2)} grams</p>
        <h1 className="text-xl font-semibold">Filament length:</h1>
        <p>{filamentLength.toFixed(2)} mm</p>
      </div>
    </div>
  );
}
