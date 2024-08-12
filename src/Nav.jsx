import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="w-full content-between h-24 fixed top-0 left-0 bg-black opacity-40 text-white">
      {" "}
      <ul>
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
