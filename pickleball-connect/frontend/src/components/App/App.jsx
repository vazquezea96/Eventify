import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Gallery from "../Gallery/Gallery";
import "./App.css";

export default function App() {
  // Store API data here
  const [eventos, setEventos] = useState([]);

  // Define an async function to JSONify the query response
  async function getData(url) {
    const res = await fetch(url);
    const { events } = await res.json();
    setEventos(events.concat(events));
  }

  // Call the async function on component mount
  useEffect(() => {
    getData(
      "https://api.seatgeek.com/2/events?client_id=MTQyMjc2OTd8MTcwOTEwNTkyNi4xODg0MjU1",
    );
  }, []);

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
      </nav>

      <Gallery eventos={eventos} refreshQueue={getData} />
    </>
  );
}
