import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className=" z-50 w-full content-between h-24 fixed top-0 left-0 flex justify-center items-center bg-[#233D4D] opacity-100 text-white">
      <ul className=" text-xl relative flex flex-row justify-between w-64 ">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/prints">Prints</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
