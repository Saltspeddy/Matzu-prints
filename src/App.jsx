import Home from "./Home";
import Nav from "./Nav";
import Prints from "./Prints";
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/prints" element={<Prints />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
