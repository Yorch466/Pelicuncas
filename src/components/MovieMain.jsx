import React from "react";
import { Gender } from "./Gender";
import movie from "../assets/peliculas.json";
import "./MovieMain.css";

export const MovieMain = () => {
  return (
    <div className="movie-main-container">
      <div className="image">
        <img src={movie.imgsrc} alt="" />
      </div>
      <Gender movie={movie} />
      <span>{movie.resume}</span>
    </div>
  );
};
