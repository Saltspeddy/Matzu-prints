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
        <h1 className="text-3xl">Hello, 3D Visionary!</h1>
        <p className="text-lg">
          Welcome to Matzu Prints, where innovation meets precision. We
          specialize in creating high-quality, on-demand 3D-printed parts
          tailored to your unique specifications. Whether you're an individual
          maker, a professional engineer, or a business seeking custom
          components, Matzu Prints is your trusted partner in bringing your
          concepts to life.
        </p>
      </div>
      <div>
        <GLTF3dmode></GLTF3dmode>
      </div>
    </div>
  );
}
