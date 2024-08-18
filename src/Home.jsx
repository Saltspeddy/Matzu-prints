import { useRef, useEffect, useState } from "react";
import STLbox from "./STLbox";
import GLTF3dmode from "./GLTF3dmode";

export default function Home() {
  const [inputValue, setInputValue] = useState(null);

  const changeModelUrl = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          // The result will be an ArrayBuffer
          const arrayBuffer = e.target.result;
          // Set inputValue to the ArrayBuffer
          setInputValue(arrayBuffer);
          console.log("ArrayBuffer created successfully:", arrayBuffer);
        } catch (error) {
          console.error("Failed to process the ArrayBuffer:", error);
        }
      };

      reader.onerror = () => {
        console.error("Error reading file:", reader.error);
      };

      reader.readAsArrayBuffer(file); // Convert the file to ArrayBuffer
    }
  };

  return (
    <div>
      <div className="h-screen w-screen absolute top-0 left-0 bg-[#011627] opacity-90 z-10"></div>
      <div
        className="z-40 font-rubik h-screen w-screen grid grid-cols-2 p-24 items-center bg-center bg-cover bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            'url("https://filamatrix.com/wp-content/uploads/2021/11/Filamatrix-117794-3D-Printing-Filaments-blogbanner1.jpg")',
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="z-40 min-h-[40vh] text-[#FDFFFC] w-[35vw] border-b-4 border-l-4 border-[#FF7D00] rounded-xl p-8 text-8xl">
            Let go of your Imagination and start printing!
          </div>
        </div>
        <div className="z-40 h-full w-full flex justify-center items-center rounded-3xl text-black p-8">
          <GLTF3dmode></GLTF3dmode>
        </div>
      </div>

      <div className="w-full h-screen flex flex-col justify-center items-center bg-[#E5E5E5]">
        <div className=" bg-[#011627] p-4 rounded-2xl text-white shadow-lg shadow-[#FF7D00]">
          <h1 className="text-xl font-semibold">
            Drop here your file and we will print them for you!
          </h1>
          <form method="post">
            <div>
              <label htmlFor="file">Choose STL file to upload</label>
              <input type="file" name="file" onChange={changeModelUrl} />
            </div>
          </form>
          <STLbox modelUrl={inputValue}></STLbox>
        </div>
      </div>
    </div>
  );
}
