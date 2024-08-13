export default function Prints() {
  return (
    <div className="w-full mt-28 flex flex-col justify-center items-center">
      {" "}
      <h1 className="text-6xl font-roboto">
        Here you can see some awsome prints made here at Matzu!
      </h1>
      <div className="w-screen p-10 grid grid-cols-4 gap-12 justify-center">
        <div className=" flex flex-col gap-4 w-[25rem]  bg-white border-[#06D6A0] rounded-2xl border-8 p-4">
          <h1 className="w-full border-b-2 border-black font-lobster font-medium">
            @Username
          </h1>
          <div
            className=" bg-contain bg-center bg-no-repeat w-full min-h-[20rem]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1613687443654-26424a9d0603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fDNkJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D")',
            }}
          ></div>
          <h2>3d printed figurine of groot</h2>
        </div>{" "}
        <div className=" flex flex-col gap-4 w-[25rem] bg-white border-[#06D6A0] rounded-2xl border-8 p-4">
          <h1 className="w-full border-b-2 border-black font-lobster font-medium">
            @Username
          </h1>
          <div
            className="bg-contain bg-center bg-no-repeat w-full"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1710828530560-2920125ad032?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fDNkJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D")',
            }}
          ></div>
          <h2>Case for micro sd cards having 8 slots</h2>
        </div>{" "}
        <div className=" flex flex-col gap-4 w-[25rem] bg-white border-[#06D6A0] rounded-2xl border-8 p-4">
          <h1 className=" w-full border-b-2 border-black font-lobster font-medium">
            @Username
          </h1>
          <div
            className=" bg-contain bg-center bg-no-repeat w-full min-h-[10rem]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1610081574260-e61e93e6e1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fDNkJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D")',
            }}
          ></div>
          <h2>adittional description of the image</h2>
        </div>{" "}
        <div className=" flex flex-col gap-4 w-[25rem] bg-white border-[#06D6A0] rounded-2xl border-8 p-4">
          <h1 className="w-full border-b-2 border-black font-lobster font-medium">
            @Username
          </h1>
          <div
            className=" bg-contain bg-center bg-no-repeat w-full min-h-[20rem]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1610081574260-e61e93e6e1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fDNkJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D")',
            }}
          ></div>
          <h2>3dprinted Yoda</h2>
        </div>
        <div className=" flex flex-col gap-4 w-[25rem]   bg-white border-[#06D6A0] rounded-2xl border-8 p-4">
          <h1 className="w-full border-b-2 border-black font-lobster font-medium">
            @Username
          </h1>
          <div
            className=" bg-contain bg-center bg-no-repeat w-full min-h-[20rem]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1610081574260-e61e93e6e1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fDNkJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D")',
            }}
          ></div>
          <h2>3dprinted Yoda figurine</h2>
        </div>
      </div>
    </div>
  );
}
