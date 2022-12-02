import React from "react";
import { getShow } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { getShows } from "../api/tmdb-api";
import PlaylistAddIcon from '../components/cardIcons/addToWatchlist'

const TvShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('shows', getShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlist = movies.filter(m => m.watchlist)
  localStorage.setItem('watchlist', JSON.stringify(watchlist))
  const addToWatchlist = (showID) => true 

  return (
    <PageTemplate
      title="Disover Tv Shows"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
);
};
export default TvShowsPage;