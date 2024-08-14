import { useRef, useEffect, useState } from "react";
import STLbox from "./STLbox";
import GLTF3dmode from "./GLTF3dmode";
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const changeModelUrl = () => {
    setInputValue(event.target.files[0]);
    console.log(event.target.files[0]);
    console.log("src/assets/cerc.stl");
  };
  useEffect(() => {});
  return (
    <div>
      <div className="h-screen w-screen absolute top-0 left-0 bg-[#011627] opacity-90 z-10">
        {" "}
      </div>
      <div
        className="z-40 h-screen w-screen flex justify-between p-24 items-center bg-center bg-cover bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            'url("https://filamatrix.com/wp-content/uploads/2021/11/Filamatrix-117794-3D-Printing-Filaments-blogbanner1.jpg")',
        }}
      >
        <div className="z-40 min-h-[40vh] text-[#FDFFFC] w-[35vw] border-b-4 border-l-4 border-[#FF7D00] rounded-xl p-8 text-8xl ">
          {" "}
          Let go of your Imagination and start printing!
        </div>
        <div className="z-40 min-h-[40vh] w-[35vw] bg-[#FF7D00] rounded-3xl text-black p-8">
          <h1>Drop here your file and we will print them for you!</h1>
          <form method="post">
            <div>
              <label htmlFor="file">Choose STL file to upload</label>
              <input type="file" name="file" onChange={changeModelUrl} />
            </div>
          </form>
          <div className="w-full h-[20rem]">
            <STLbox modelUrl={inputValue}></STLbox>
          </div>
        </div>
      </div>
      {/* <GLTF3dmode></GLTF3dmode> */}
    </div>
  );
}
