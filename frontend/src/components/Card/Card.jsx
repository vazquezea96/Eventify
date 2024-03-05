import { Link } from "react-router-dom";
import "./styles.css";

export default function Card({ evento }) {
  return (
    <figure className="relative mb-4 break-inside-avoid-column border-2 border-black rounded-xl bg-[#b6c2d4] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <Link to={"/details/" + evento.id} onClick={() => updateDetails(evento)}>
        <img
          src={evento.performers[0].image}
          className="card-image rounded-t-xl min-h-[200px] min-w-full object-cover cursor-pointer"
        />
      </Link>

      <figcaption className="py-2 pr-4 pl-2">
        <h1 className="text-lg truncate">{evento.performers[0].name}</h1>
        <h3>{evento.venue.name}</h3>
        <h3 className="text-lg truncate">
          <a href={evento.performers[0].url}>Buy Ticket</a>
        </h3>
        {/* TODO: <h4>{evento.datetime_utc}</h4> */}
        <p>From ${evento.stats.lowest_price}</p>
      </figcaption>
    </figure>
  );
}
