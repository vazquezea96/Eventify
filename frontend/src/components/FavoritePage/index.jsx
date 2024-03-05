import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../Card";

export default function FavoritesPage({
  favArtworks,
  setFavArtworks,
  loginStatus,
  updateDetails,
}) {
  // Redirect to login page if an unauthorized user tries to access this route
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginStatus) {
      navigate("/auth/login");
    }
  }, [loginStatus]);

  if (favArtworks.length === 0) {
    return (
      <>
        <h1 className="mt-[40vh] text-center md:text-3xl text-3xl font-bold">
          You have no favorited artwork yet!
        </h1>
        <h2 className="mt-5 text-center md:text-xl text-lg font-semibold italic">
          Browse the{" "}
          <Link
            className="underline cusor-pointer hover:text-gray-200 transition-all ease-in-out duration-300"
            to="/"
          >
            gallery
          </Link>{" "}
          to find art you like
        </h2>
      </>
    );
  } else {
    return (
      <main className="w-4/5 mt-5 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
        {favArtworks.map((artwork) => (
          <Card
            key={artwork.artworkId}
            artwork={{ ...artwork, id: artwork.artworkId }}
            updateDetails={updateDetails}
            favArtworks={favArtworks}
            setFavArtworks={setFavArtworks}
          />
        ))}
      </main>
    );
  }
}
