import React, { useEffect, useState } from "react";
import Serch from "../components/Serch";
import PosterCard from "../components/SeccionMovie";
import SeccionMovie from "../components/SeccionMovie";
import MovieImages from "../components/MovieImages";
import NavigationBar from "../components/NavigationBar";

const Home = () => {

  const [newestMovies, setNewestMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);
  const [topMovie, setTopMovie] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);

  useEffect(() => {
    // Realiza la llamada a la API para obtener las películas más recientes y próximas
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=43d89bad4404d1398e74db3cdffcde40"
    )
      .then((response) => response.json())
      .then((data) => setNewestMovies(data.results))
      .catch((error) => console.log(error));

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=43d89bad4404d1398e74db3cdffcde40"
    )
      .then((response) => response.json())
      .then((data) => setComingSoonMovies(data.results))
      .catch((error) => console.log(error));

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=43d89bad4404d1398e74db3cdffcde40"
    )
      .then((response) => response.json())
      .then((data) => setTopMovie(data.results))
      .catch((error) => console.log(error));

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=43d89bad4404d1398e74db3cdffcde40"
    )
      .then((response) => response.json())
      .then((data) => setActionMovies(data.results))
      .catch((error) => console.log(error));
  }, []);


  return (
    <div>
      <Serch />
      <MovieImages category="Newest" movies={newestMovies || []}/>
      <MovieImages category="Coming Soon" movies={comingSoonMovies || []}/>
      <MovieImages category="Top Movies" movies={topMovie || []}/>
      <MovieImages category="Action Movies" movies={actionMovies || []}/>
      <NavigationBar/>
      {/* <SeccionMovie/> */}
    </div>
  );
};

export default Home;
