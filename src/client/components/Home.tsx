import styles from "../css/Home.module.css";

import Navbar from "./Navbar";

import requests from "../requests";
import { useState, useEffect, Key } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
;}

export default function Home() {
  const [movies, setMovie] = useState<any[]>([]);

  const requestKeys = Object.keys(requests);
  const randomIndex = Math.floor(Math.random() * requestKeys.length);
  const randomRequestKey = requestKeys[randomIndex];
  const randomRequest = requests[randomRequestKey];
  const randomRequestName = randomRequestKey.replace("request", "");

  console.log(randomRequestName);

  const fetchUrl = randomRequest;
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovie(response.data.results);
    });
  }, [fetchUrl]);


  const shuffledMovies = shuffle(movies);


  console.log(movies);
  return (
    <>
      <Navbar />
      <div className={`container ${styles["my-container"]}`}>
        <div className={`row ${styles["my-row"]}`}>
        <Link
                to={"/movie-info"}
                state={{ movie: movies[0], genre: randomRequestName }}
                className={`col-4 ${styles["movie"]}`}
                >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movies[0]?.backdrop_path}`}
                />
            </Link>
            <Link
                to={"/movie-info"}
                state={{ movie: movies[1], genre: randomRequestName }}
                className={`col-4 ${styles["movie"]}`}
                >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movies[1]?.backdrop_path}`}
                />
            </Link>
            <Link
                to={"/movie-info"}
                state={{ movie: movies[2], genre: randomRequestName }}
                className={`col-4 ${styles["movie"]}`}
                >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movies[2]?.backdrop_path}`}
                />
            </Link>
        </div>
        <div className={`row ${styles["my-row"]}`}>
            <Link
                to={"/movie-info"}
                state={{ movie: movies[3], genre: randomRequestName }}
                className={`col-4 ${styles["movie"]}`}
                >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movies[3]?.backdrop_path}`}
                />
            </Link>
            <Link
                to={"/movie-info"}
                state={{ movie: movies[4], genre: randomRequestName  }}
                className={`col-4 ${styles["movie"]}`}
                >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movies[4]?.backdrop_path}`}
                />
            </Link>
            <Link
                to={"/movie-info"}
                state={{ movie: movies[5], genre: randomRequestName  }}
                className={`col-4 ${styles["movie"]}`}
                >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movies[5]?.backdrop_path}`}
                />
            </Link>
        </div>
        <div className={`row ${styles["my-row"]}`}>
            <Link
                to={"/movie-info"}
                state={{ movie: movies[7], genre: randomRequestName  }}
                className={`col-4 ${styles["movie"]}`}
                >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movies[7]?.backdrop_path}`}
                />
            </Link>
            <Link
                to={"/movie-info"}
                state={{ movie: movies[8], genre: randomRequestName  }}
                className={`col-4 ${styles["movie"]}`}
                >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movies[8]?.backdrop_path}`}
                />
            </Link>
            <Link
                to={"/movie-info"}
                state={{ movie: movies[9], genre: randomRequestName  }}
                className={`col-4 ${styles["movie"]}`}
                >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movies[9]?.backdrop_path}`}
                />
            </Link>
        </div>
      </div>
    </>
  );
}
