import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
//import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"; // NEW
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import ShowsContextProvider from "./contexts/showsContexts";
import TvShowsPage from "./pages/tvShowsPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularMoviesPage from "./pages/popularMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviePage";
import LatestMoviesPage from "./pages/latestMoviesPage";
import ShowDetailsPage from "./pages/showDetailsPage";
import FavouriteShowsPage from "./pages/favouriteShowsPage";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        
        <MoviesContextProvider>
        <ShowsContextProvider>
            <Routes>
            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/popularMovies" element={<PopularMoviesPage />} />
        <Route path="/movies/topRatedMovies" element={<TopRatedMoviesPage />} />
        <Route path="/movies/latestMovies" element={<LatestMoviesPage />} />
        <Route path="/shows/tvShows" element={<TvShowsPage />} />
        <Route path="/shows/tvShows/:id" element={<ShowDetailsPage />} />
        <Route path="/shows/tvShows/favourites" element={<FavouriteShowsPage />} />
        </Routes>
        </ShowsContextProvider>
        </MoviesContextProvider>
       
        
       
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);