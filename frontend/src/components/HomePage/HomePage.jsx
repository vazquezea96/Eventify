import { useState } from "react";
import Gallery from "../Gallery/Gallery";
import Recommended from "../Recommended/Recommended";
import Footer from "../Footer/Footer";

export default function HomePage({
  eventos,
  setEventos,
  refreshQueue,
  updateDetails,
}) {
  // the value of the search bar is stored here
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    // prevent the form from reloading the page
    event.preventDefault();
    // clear the previous gallery's data
    setEventos([]);
    // query the API with the user's input & update the gallery data
    refreshQueue(
      `https://api.seatgeek.com/2/events?per_page=10&page=1&q=${query}&client_id=MTQyMjc2OTd8MTcwOTEwNTkyNi4xODg0MjU1`,
    );
  }

  return (
    <>
      <div className="pb-10">
        <form onSubmit={handleSubmit} className="mt-4 text-center">
          <input
            className="box-border p-2 w-3/5 rounded-md border border-gray-300 focus:outline-none focus:border-gray-500"
            name="search"
            placeholder="What do you want to see live?"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button
            type="submit"
            className="text-white box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-700 rounded-lg font-semibold hover:bg-gray-700 hover:opacity-70 transition-all duration-200 ease-in-out"
          >
            Search
          </button>
        </form>
      </div>


      <Gallery
        query={query}
        eventos={eventos}
        refreshQueue={refreshQueue}
        updateDetails={updateDetails}
      />

      <Footer />
    </>
  );
}
