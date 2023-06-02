import React, { useEffect, useState } from "react";
import "./MovieImages.css";

const MovieImages = ({ category, movies }) => {
  return (
    <div className="movie-container">
      <h2>{category}</h2>
      <div className="miau">
        {movies && movies.length > 0 ? (
          movies.slice(0, 5).map((movie) => (
            <div className="movie" key={movie.id}>
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))
        ) : (
          <p>No se encontraron películas</p>
        )}
      </div>
    </div>
  );
};
export default MovieImages;
