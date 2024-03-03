import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../CommentSection/CommentSection";

export default function DetailsPage(props) {
  const [evento, setEvento] = useState({});
  const params = useParams();

  useEffect(() => {
    // Query the API if a Card Component was not clicked on
    if (!evento.id) {
      console.log(evento);
      async function getEventoFromAPI() {
        const res = await fetch(
          "https://api.seatgeek.com/2/events/" +
            params.id +
            "?client_id=MTQyMjc2OTd8MTcwOTEwNTkyNi4xODg0MjU1",
        );
        const data  = await res.json(); // destructure the JSON response
        console.log(data);
        setEvento(data);
      }
      getEventoFromAPI();
    }
  }, []);

  return (
    <>
      <div className="w-4/5 mx-auto min-h-[300px] border-2 border-black rounded-lg">
        <h1>{evento?.performers ? evento.performers[0].name : null}</h1>
        <br />
        <p>Placeholder</p>
      </div>
      {evento.id ? (
        <CommentSection eventId={evento.id} />
      ) : (
        <h1>Loading...</h1>
      )}
      {/* <CommentSection eventId={evento?.id} /> */}
    </>
  );
}
