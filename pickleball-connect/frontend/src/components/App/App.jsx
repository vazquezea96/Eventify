import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "../About/About";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <nav className="flex items-center justify-between h-16 bg-gray-800 shadow-lg lg:px-9 md:px-6 px-3">
        <Link to="/">
          <h1 className="text-white font-bold md:text-3xl sm:text-2xl">
            Pickleball Connect
          </h1>
        </Link>
        <Link to="/about">
          <h2 className="text-white md:text-lg sm:text-md">About Us</h2>
        </Link>
      </nav>

      <About />
      <NotFoundPage />
    </>
  );
}

export default App;
