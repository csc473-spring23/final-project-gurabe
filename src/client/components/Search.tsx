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

    const movieLinks = movies
        .filter((movie) => movie.backdrop_path != null) // Filter out movies with no image
        .map((movie, index) => (
            <div
                className={`col-4 ${styles["movie"]}`}
                key={index}
            >
                <Link
                    to={"/movie-info"}
                    state={{ movie }}
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    />
                </Link>
                <p className={`${styles["movie-name"]}`}>
                    {movie.original_title}
                </p>
            </div>
        ));

    // Create a row of three movies
    function makeMovieRow(m: JSX.Element[], s: number) {
        return (
            <div
                className="row"
                key={s / 3}
            >
                {m[s] == undefined ? <></> : m[s]}
                {m[s + 1] == undefined ? <></> : m[s + 1]}
                {m[s + 2] == undefined ? <></> : m[s + 2]}
            </div>
        );
    }

    // Create a list of movie rows
    function makeMovieRowList(m: JSX.Element[]) {
        let rows = [];
        for (let i = 0; i < m.length; i += 3) {
            rows.push(makeMovieRow(m, i));
        }
        return rows;
    }

    return (
        <>
            <Navbar />
            <div className={`container ${styles["my-container"]}`}>
                <p>Search results for "{`${search}`}":</p>
                {makeMovieRowList(movieLinks)}
            </div>
        </>
    );
}

/*
RESOURCES: 

URL Parameters with React: https://ui.dev/react-router-url-parameters
*/
