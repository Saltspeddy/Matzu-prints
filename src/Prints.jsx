import Footer from "./Footer";
import Postcard from "./Postcard";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://czxwymtiozxgbojllefx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6eHd5bXRpb3p4Z2JvamxsZWZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0NjA2NDcsImV4cCI6MjA1MTAzNjY0N30.SSNYCOgnTCWcExVhXP5nZj3RflIqeztJ3ThYTxeupmc"
);
async function uploadFile(file) {
  const { data, error } = await supabase.storage
    .from("print_photos") // Bucket name
    .upload("./dragos.png", file); // Path in the bucket

  if (error) {
    console.error("Upload failed:", error.message);
    return;
  }
  console.log("Image uploaded successfully:", data);
}
export default function Prints() {
  return (
    <div className="bg-[#011627] w-full pt-24 text-[#FDFFFC] flex flex-col justify-center items-center">
      {" "}
      <h1 className="text-6xl font-roboto">
        Here you can see some awesome prints made here at Matzu!
      </h1>
      <div className="w-screen p-10 grid grid-cols-4 gap-12 justify-center">
        <div className="flex w-full gap-4 flex-col min-h-full">
          <Postcard
            id="1"
            url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            name="lamp head with waves"
            creator="Josh"
          ></Postcard>

          <Postcard
            id="2"
            url="https://images.unsplash.com/photo-1730315269715-1e25650773be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDNkJTIwcHJpbnR8ZW58MHx8MHx8fDA%3Dhttps://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            name="lamp head with waves"
            creator="Josh"
          ></Postcard>
        </div>
        <div className="flex w-full gap-4 flex-col min-h-full">
          <Postcard
            id="3"
            url="https://images.unsplash.com/photo-1693786229415-8c4b2260a925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fDNkJTIwcHJpbnR8ZW58MHx8MHx8fDA%3Dps://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            name="lamp head with waves"
            creator="Josh"
          ></Postcard>
          <div className="w-[300px] h-[400px] bg-black"></div>
        </div>
        <div className="flex w-full gap-4 flex-col min-h-full">
          <Postcard
            id="4"
            url="https://images.unsplash.com/photo-1730267252531-c10193f16534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fDNkJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D"
            name="lamp head with waves"
            creator="Josh"
          ></Postcard>
          <Postcard
            id="5"
            url="https://images.unsplash.com/photo-1616442804090-95cd5c916c12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHwzZCUyMHByaW50fGVufDB8fDB8fHww://images.unsplash.com/photo-1730267252531-c10193f16534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fDNkJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D"
            name="lamp head with waves"
            creator="Josh"
          ></Postcard>
          <div className="w-[300px] h-[20em] bg-black"></div>
        </div>
        <div className="flex w-full gap-4 flex-col min-h-full">
          <Postcard
            id="6"
            url="https://images.unsplash.com/photo-1730266433003-93eb20c3f930?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fDNkJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D://images.unsplash.com/photo-1730267252531-c10193f16534?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fDNkJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D"
            name="lamp head with waves"
            creator="Josh"
          ></Postcard>
          <div className="w-[300px] h-[20em] bg-black"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
