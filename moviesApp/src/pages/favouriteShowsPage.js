import React, { useContext } from "react";
import PageTemplate from "../showComponents/templateShowListPage";
import { ShowsContext } from "../contexts/showsContexts";
import { useQueries } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavourites from "../showComponents/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteShowsPage = () => {
  const {favourites: showIds } = useContext(ShowsContext);

  // Create an array of queries and run in parallel.
  const favouriteShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const shows = favouriteShowQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
            <RemoveFromFavourites show={show} />
          </>
        );
      }}
    />
  );
};

export default FavouriteShowsPage;