import React from 'react';
import { actors } from '../data';
import { act } from 'react-test-renderer';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return <div>
          {actor.name}<br/>
          Movies: {actor.movies.map(movie => {
            return <ul>{movie}</ul>
          })}
        </div>
      })}
    </div>
  );
};

export default Actors;
