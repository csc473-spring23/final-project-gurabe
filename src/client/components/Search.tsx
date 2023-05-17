import styles from "../css/Search.module.css";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const { search } = useParams(); // Grab parameter content from URL
  const [movies, setMovie] = useState<any[]>([]);

  const find = `https://api.themoviedb.org/3/search/movie?api_key=9bfb78557ee79b8248e4ed092880d4c2&language=en-US&query=${search}&page=1&include_adult=false`;
  useEffect(() => {
    axios.get(find).then((response) => {
      setMovie(response.data.results);
    });
  }, [find]);

  const movieLinks = movies.map((movie, index) => (
    <Link
      key={index}
      to={"/movie-info"}
      state={{ movie }}
      className={`col-4 ${styles["movie"]}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
      />
    </Link>
  ));

  return (
    <>
      <Navbar />
      <div className={`container ${styles["my-container"]}`}>
        <p>Search results for "{`${search}`}":</p>
        {/* TODO: Use form data here to interact with API and update the DOM*/}
        {movieLinks}
      </div>
    </>
  );
}

/*
RESOURCES: 

URL Parameters with React: https://ui.dev/react-router-url-parameters
*/
