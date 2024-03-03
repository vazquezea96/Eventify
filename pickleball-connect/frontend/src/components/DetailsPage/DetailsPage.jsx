import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../CommentSection/CommentSection";

export default function DetailsPage(props) {
  const [evento, setEvento] = useState({ ...props.eventos });
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
        const { data } = await res.json(); // destructure the JSON response
        setEvento(data);
      }
      getEventoFromAPI();
    }
  }, []);

  return (
    <div className="w-4/5 mx-auto min-h-[300px] border-2 border-black rounded-lg">
      <h1>evento.name</h1>
      <br />
      <p>Placeholder</p>

      <CommentSection eventId={event.id} />
    </div>
  );
}
