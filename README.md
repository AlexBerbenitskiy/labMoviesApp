# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: Alexander Berbenitskiy

## Overview.

### New Pages.

+ Discover Tv Shows Page (works but does not display pictures, name and date. 'Add to favourites' does not work)
+ Favourite Tv Shows Page 
+ Tv Shows Details Page (Doesnt work as redirects back to Home Page)
+ Popular Movies Page
+ Top Rated Movies Page
+ Latest Movies Page

### New Features.

+ No new features added.

## Setup requirements.

+ No setup requirements.

## TMDB endpoints.

+ /discover/tv - List of TV shows.
+ /movie/top_rated - List of top rated movies.
+ /movie/popular - list of popular movies.
+ /movie/latest - list of latest movies.
+ /tv/{tv_id} - specific tv show details.
+ /tv/{tv_id}/images - tv show image.

## App Design.

### Component catalogue.

![storyBook](https://user-images.githubusercontent.com/74902057/205676625-da1aa2de-2c84-459f-8bdf-7771c13091b0.PNG)

>No new additions to the storybook.

### UI Design.

![popularMoviesPage](https://user-images.githubusercontent.com/74902057/205677334-5d9d2678-0b22-415a-83cd-a08cf2d2043a.PNG)

>Shows popular movies page. Both details and add to favourites work.

![topRatedMoviesPage](https://user-images.githubusercontent.com/74902057/205677473-5c6edec0-ab15-4ff3-b37c-6f2e124868a8.PNG)

>Shows the top rated movies page. Both 'details' and 'add to favourites' work.

![latestMoviesPage](https://user-images.githubusercontent.com/74902057/205677716-357c036f-0e8b-4c66-8fb3-9c826ad6d25b.PNG)

>Shows latest movies page. Both 'details' and 'add to favourites work'.

![discoverShowsPage](https://user-images.githubusercontent.com/74902057/205677795-6aa71ec9-f172-4b69-a5af-2597179223e2.PNG)

>Shows discover tv shows page. Displays tv shows but without the pictures and only the rating. 'Details' button redirects back to 'Home'. 'Add to favourites' doesnt work.

![favouriteShowsPage](https://user-images.githubusercontent.com/74902057/205678268-c4ca7fe6-bde0-48ff-8eb4-0a1164137bfc.PNG)

>Shows favourite tv shows page. Doesnt display shows as 'add to favourites' option in 'Discover Shows' Page doesnt work.

### Routing.

+ /movies/popularMovies - displays list of popular movies.
+ /movies/topRatedMovies - displays list of top rated movies.
+ /movies/latestMovies - displays list of latest movies.
+ /shows/tvShows - displays list of tv shows.
+ /shows/tvShows/:id - displays details of particular tv show.
+ /shows/tvShows/favourites - displays favourite tv shows.

## Independent learning (If relevant).

+ None
