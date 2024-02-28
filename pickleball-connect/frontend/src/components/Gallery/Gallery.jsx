import { useState } from "react";
import Card from "../Card/Card";

export default function Gallery({ eventos, refreshQueue }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Update the current page so the gallery content changes,
  // modify how many artworks appear in the artworks array
  function getNextPage() {
    refreshQueue(`https://api.seatgeek.com/2/events?client_id=MTQyMjc2OTd8MTcwOTEwNTkyNi4xODg0MjU1`)
    setCurrentPage(currentPage + 1)
  }

  return (
    <>
    {/* <div className="page-controls" >
        <button onClick={getPrevPage}>Previous Page</button>
        <button onClick={getNextPage}>Next Page</button>
    </div> */}
      <div className="w-4/5 mt-10 mx-auto xl:columns-4 lg:columns-3 md:columns-2 text-white">
        {eventos.length > 0 ? (
          eventos.map((evento) => <Card key={evento.id} evento={evento} />)
        ) : (
          <p>Your events are loading...</p>
        )}
      </div>
    </>
  );
}
