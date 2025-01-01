import Footer from "./Footer";
import { HashLink as Link } from "react-router-hash-link";
import Itemcard from "./Itemcard";
export default function Shop() {
  return (
    <div className="w-screen min-h-screen bg-[#011627]">
      <div className="w-full min-h-screen grid grid-cols-5 pt-24 text-[#FDFFFC]">
        <div className="flex flex-col items-center">
          <div className="fixed flex flex-col top-32 bg-[#022D50] p-4 rounded-2xl w-[15vw] h-[70vh] text-2xl font-roboto">
            <div>Categories:</div>
            <Link smooth to="#home" className="ml-4">
              &#x2022; Home
            </Link>
            <Link smooth to="#office" className="ml-4">
              &#x2022; Office
            </Link>
            <Link smooth to="#deco" className="ml-4">
              &#x2022; Decorations
            </Link>
            <Link smooth to="#tools" className="ml-4">
              &#x2022; Tools
            </Link>
            <Link smooth to="#other" className="ml-4">
              &#x2022; Other
            </Link>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-4 mb-10">
          <h1 className="text-5xl font-roboto border-b-4 border-[#FB8500] border-solid">
            Here are some original Matzu products usefull in any home
          </h1>
          <div className="w-full">
            <div>
              <h2
                id="home"
                className="text-4xl border-b-2 border-[#FB8500] border-solid"
              >
                &#x2022; Home
              </h2>
              <div className="m-5 flex flex-wrap gap-8">
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-fit">
              <h2
                id="office"
                className="text-4xl border-b-2 border-[#FB8500] border-solid "
              >
                &#x2022; Office
              </h2>
              <div className="m-5 flex flex-wrap gap-8">
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-fit">
              <h2
                id="deco"
                className="text-4xl border-b-2 border-[#FB8500] border-solid "
              >
                &#x2022; Decorations
              </h2>
              <div className="m-5 flex flex-wrap gap-8">
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-fit">
              <h2
                id="tools"
                className="text-4xl border-b-2 border-[#FB8500] border-solid "
              >
                &#x2022; Tools
              </h2>
              <div className="m-5 flex flex-wrap gap-8">
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-fit">
              <h2
                id="other"
                className="text-4xl border-b-2 border-[#FB8500] border-solid "
              >
                &#x2022; Other
              </h2>
              <div className="m-5 flex flex-wrap gap-8">
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
                <Itemcard></Itemcard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
