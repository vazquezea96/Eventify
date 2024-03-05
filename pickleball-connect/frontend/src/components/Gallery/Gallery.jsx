import { useState } from "react";
import Card from "../Card/Card";

export default function Gallery({ eventos, refreshQueue, query }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Update the current page so the gallery content changes,
  // modify how many artworks appear in the artworks array
  function getNextPage() {
    refreshQueue(
      `https://api.seatgeek.com/2/events?per_page=5&page=5&q=${query}&client_id=MTQyMjc2OTd8MTcwOTEwNTkyNi4xODg0MjU1`,
    );
    setCurrentPage(currentPage + 1);
  }

  // Update the current page so that gallery content changes
  function getPrevPage() {
    setCurrentPage(currentPage - 1);
  }

  // Conditionally change the value of the gallery content
  let galleryContent = <p>Your events are loading...</p>;

  // Conditionally change the value of the gallery content
  if (eventos.length > 0) {
    // Determine the # events that correspond to the currentPage
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    // Slice the 20 corresponding eventos and create Cards for them
    galleryContent = eventos
      .slice(startIndex, endIndex)
      .map((evento) => <Card key={evento.id} evento={evento} />);
  }

  // Define Tailwind utility classes that will be used more than once
  const pageControlsClasses = "w-4/5 mx-auto mt-5 md:text-right text-center";
  const btnClasses =
    "border-2 border-gray-700 rounded-lg p-1 mx-2 font-semibold hover:bg-gray-700 hover:opacity-70 transition-all duration-200 ease-in-out";

  return (
    <>
      <div className={pageControlsClasses}>
        <button onClick={getPrevPage} className={btnClasses}>
          Previous Page
        </button>
        <button onClick={getNextPage} className={btnClasses}>
          Next Page
        </button>
      </div>

      <div className="w-4/5 mt-5 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
        {/* Render whatever the value of the galleryContent variable is */}
        {galleryContent}
      </div>

      <div className={pageControlsClasses + " mb-5"}>
        <button onClick={getPrevPage} className={btnClasses}>
          Previous Page
        </button>
        <button onClick={getNextPage} className={btnClasses}>
          Next Page
        </button>
      </div>
    </>
  );
}
