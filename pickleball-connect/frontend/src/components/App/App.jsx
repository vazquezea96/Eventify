import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import About from "../About/About";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import AuthFormPage from "../AuthFormPage";
import DetailsPage from "../DetailsPage/DetailsPage";
import "./App.css";

export default function App() {
  // Store API data here
  const [eventos, setEventos] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);
  const [detailsData, setDetailData] = useState({});

  // Define an async function to JSONify the query response
  async function getData(url) {
    const res = await fetch(url);
    const { events } = await res.json(); // destructure the JSON response
    setEventos(events);
  }

  // Call the async function on component mount
  useEffect(() => {
    getData(
      "https://api.seatgeek.com/2/events?per_page=25&page=3&taxonomies.name=concert&geoip=true&client_id=MTQyMjc2OTd8MTcwOTEwNTkyNi4xODg0MjU1",
    );
    if (localStorage.getItem("userToken")) {
      setLoginStatus(true);
    }
  }, []);

  // Constionally render the login/singup links and the logout button
  let authLink = (
    <div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2">
      <Link to="/auth/signup">
        <h2 className="text-white md:text-lg sm:text-md">Sign Up</h2>
      </Link>
      <Link to="/auth/login">
        <h2 className="text-white md:text-lg sm:text-md">Log In</h2>
      </Link>
    </div>
  );

  if (loginStatus) {
    authLink = (
      <button
        className="text-white md:text-lg sm:text-md"
        onClick={() => {
          localStorage.clear();
          setLoginStatus(false);
        }}
      >
        Log Out
      </button>
    );
  }

  return (
    <>
      <nav className="flex items-center justify-between h-16 bg-gray-800 shadow-lg lg:px-9 md:px-6 px-3">
        <Link to="/">
          <h1 className="text-white font-bold md:text-3xl sm:text-2xl">
            Eventify
          </h1>
        </Link>
        <Link to="/about">
          <h2 className="text-white md:text-lg sm:text-md">About Us</h2>
        </Link>
        {authLink}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              eventos={eventos}
              refreshQueue={getData}
              updateDetails={setDetailData}
              setEventos={setEventos}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route
          path="/details/:id"
          element={<DetailsPage evento={detailsData} />}
        />
        <Route
          path="/auth/:formType"
          element={<AuthFormPage setLoginStatus={setLoginStatus} />}
        />
      </Routes>
    </>
  );
}
