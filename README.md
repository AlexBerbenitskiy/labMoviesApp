# Assignment 2 - Web API.

Name: Alexander Berbenitskiy

## Features.

[A bullet-point list of the ADDITIONAL features/endpoints you have implemented in the API **THAT WERE NOT IN THE LABS** ]. 

 + getMovies was edited to use the API data instead of TMDB.


## Installation Requirements

No additional installation requirements are needed for the react app and API app apart from what was done in the labs.

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:

.env file of the API App located in the movies-api folder

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/movies_db
SEED_DB=True
SECRET=ilikecake
```

## API Design

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |


## Security and Authentication
A login and sign up page were implemented however they do not work. Authentication features also do not work however are implemented.
A 'You are not logged in, [Login]' message is displayed informing the user that they are not logged in.

## Integrating with React App

The wfollowing code was used in an attempt to get the movies page to display movies from the api. This was however unsuccessful.

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};
~~~

## Extra features

No extra features were added.

## Independent learning.

None.
