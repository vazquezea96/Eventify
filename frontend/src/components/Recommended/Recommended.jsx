import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import Card from "../Card/Card";

export default function Recommended({ eventos }) {
  const [recommendation, setRecommendation] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.seatgeek.com/2/recommendations?events.id=${params.id}&geoip=true&client_id=MTQyMjc2OTd8MTcwOTEwNTkyNi4xODg0MjU1`);
      const { recommendations } = await res.json();
      setRecommendation(recommendations);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-6xl text-center">Recommended</h1>

      <div className="w-4/5 mt-10 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
        {recommendation.length > 0 ? (
          recommendation.map(({event}) =>  <Card key={event.id} evento={event} />)
        )
         : (
          <p>Your recs is loading...</p>
        )}
      </div>
    </>
  );
}
