import GLTF3dmode from "./GLTF3dmode";

export default function About() {
  return (
    <div className="bg-[#011627] min-h-screen w-screen mt-24 grid grid-cols-2">
      <div className="text-white">
        <h1>Hello 3d enthusiast!</h1>
        <p> Here at Matzu printers we make your dreams come true</p>
      </div>
      <div>
        <GLTF3dmode></GLTF3dmode>
      </div>
    </div>
  );
}
