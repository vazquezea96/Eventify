import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recommended from "../Recommended/Recommended";
import CommentSection from "../CommentSection/CommentSection";

export default function DetailsPage(props) {
  const [evento, setEvento] = useState({});
  const params = useParams();

  useEffect(() => {
    // Query the API if a Card Component was not clicked on
    if (!evento.id) {
      async function getEventoFromAPI() {
        const res = await fetch(
          "https://api.seatgeek.com/2/events/" +
            params.id +
            "?client_id=MTQyMjc2OTd8MTcwOTEwNTkyNi4xODg0MjU1",
        );
        const data = await res.json(); // destructure the JSON response
        setEvento(data);
      }
      getEventoFromAPI();
    }
  }, []);

  return (
    <>
      <div className="w-4/5 mx-auto min-h-[300px] border-2 border-black rounded-lg">
        <h1>{evento ? evento.title : null}</h1>
        <h2>{evento?.performers ? evento.performers[0].name : null}</h2>
        <br />
        <img src={evento?.performers ? evento.performers[0].image : null} />

        <h2>
          SeatGeek Score:{" "}
          {evento?.performers ? evento.performers[0].score : null}
        </h2>

        <p>Venue: {evento?.venue ? evento.venue.name : null}</p>
        {evento?.venue ? evento.venue.city + ", " + evento.venue.state : null}
      </div>
      {evento.id ? <CommentSection eventId={evento.id} /> : <h1>Loading...</h1>}
      <Recommended />
    </>
  );
}
