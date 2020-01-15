import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
        return <div>
          {movie.title}<br/>
          Runtime: {movie.time}<br/>
          Genres: {movie.genres.map(genre => {
            return <ul>{genre}</ul>
          })}
          <br/>
        </div>
      })}
    </div>
  );
};

export default Movies;
