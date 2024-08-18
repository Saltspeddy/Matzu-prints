import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="text-[#011627] z-50 w-full content-between h-24 fixed top-0 left-0 flex justify-center items-center bg-[#788AA3] opacity-80">
      <ul className="font-rubik text-xl relative flex flex-row justify-between w-64 ">
        <li className="hover:text-white duration-300">
          <Link to="/"> Home </Link>
        </li>
        <li className="hover:text-white duration-300">
          <Link to="/prints">Prints</Link>
        </li>
        <li className="hover:text-white duration-300">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
