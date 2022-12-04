import React from "react";
import { getShow } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import { getShows } from "../api/tmdb-api";
import PlaylistAddIcon from '../components/cardIcons/addToWatchlist'
import { getMovies } from "../api/tmdb-api";
import { getUpcoming } from "../api/tmdb-api";
import { getPopularMovies } from "../api/tmdb-api";

const TvShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('shows', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlist = movies.filter(m => m.watchlist1)
  localStorage.setItem('watchlist', JSON.stringify(watchlist))
  const addToWatchlist = (showID) => true 

  return (
    <PageTemplate
      title="Disover Tv Shows"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
);

    };
export default TvShowsPage;