import React from "react";
import { getShows } from "../api/tmdb-api";
import PageTemplate from '../showComponents/templateShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import PlaylistAddIcon from '../components/cardIcons/addToWatchlist'
import { getMovies } from "../api/tmdb-api";



const TvShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('shows', getShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlist = shows.filter(m => m.watchlist1)
  localStorage.setItem('watchlist', JSON.stringify(watchlist))
  const addToWatchlist = (showID) => true 

  return (
    <PageTemplate
      title="Disover Tv Shows"
      shows={shows}
      action={(show) => {
        return <AddToFavouritesIcon show={show} />
      }}
    />
);

    };
export default TvShowsPage;