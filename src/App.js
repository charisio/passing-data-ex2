import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

const NotLikedMovies = () => (
	<p>None of the current users liked this movie</p>
);

class LikedMovies extends Component {
	render() {
      const {usersLikedMovie} = this.props;
    	return (
			<div>
              <p>Liked By:</p>
              <ul>
                  {usersLikedMovie.map(user =>
                      <li key={user.name}>{user.name}</li>
                  )}
              </ul>
			</div>
        );
    }
}

class MoviesList extends Component {
  render() {
    const {movies} = this.props;
    const usersWhoLikedMovies = Object.values(movies).map(movie => {
          const userIDs = profiles.filter(profile => profile.favoriteMovieID === movie.id.toString()).map(filtered => filtered.userID);
          const usersLikedMovie = Object.values(users).filter(user => userIDs.includes(user.id.toString()));
          return (
            <li key={movie.name}>
              <h2>{movie.name}</h2>
              {usersLikedMovie.length ? 
                    <LikedMovies usersLikedMovie={usersLikedMovie}/> : 
                    <NotLikedMovies/> }
          	</li>
        )});
  	return(
      <ul>
      	{usersWhoLikedMovies}
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
		<MoviesList 
			movies={movies} 
			users={users} 
			profiles={profiles} />
      </div>
    );
  }
}

export default App;
