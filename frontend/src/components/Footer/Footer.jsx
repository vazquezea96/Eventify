import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <nav className="flex items-center justify-between h-16 bg-gray-800 shadow-lg lg:px-9 md:px-6 px-3">
          <Link to="/">
            <h1 className="text-white font-bold md:text-3xl sm:text-2xl">
              Eventify
            </h1>
          </Link>
          <p className="flex items-center justify-between text-white">
            © 2024 Eventify
            <br />
            Created by Eduardo Vazquez
          </p>
          <Link to="/about">
            <h2 className="text-white md:text-lg sm:text-md">About Us</h2>
          </Link>
        </nav>
      </footer>
    </>
  );
}
