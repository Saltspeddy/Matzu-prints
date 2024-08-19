import GLTF3dmode from "./GLTF3dmode";

export default function About() {
  return (
    <div className="bg-[#011627] min-h-screen w-screen pt-24 grid grid-cols-2">
      <div className="text-white font-rubik p-4">
        <div
          className="w-full h-[60vh] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/dragos.png)",
          }}
        ></div>
        <h1 className="text-3xl">Welcome, 3D Visionary!</h1>
        <p className="text-lg">
          At Matzu Printers, we're dedicated to turning your creative ideas into
          reality, one print at a time.
        </p>
      </div>
      <div>
        <GLTF3dmode></GLTF3dmode>
      </div>
    </div>
  );
}
