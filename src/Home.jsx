export default function Home() {
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
          <div
            id="drop_zone"
            ondrop="dropHandler(event);"
            ondragover="dragOverHandler(event);"
          >
            <p>
              Drag one or more files to this <i>drop zone</i>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
