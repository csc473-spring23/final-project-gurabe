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
}

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

    // Create a list of movie elements
    const movieLinks = movies.map((movie, index) => (
        <div
            className={`col-4 ${styles["movie"]}`}
            key={index}
        >
            <Link
                to={"/movie-info"}
                state={{ movie: movie, genre: randomRequestName }}
            >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                />
            </Link>
            <p className={`${styles["movie-name"]}`}>{movie.original_title}</p>
        </div>
    ));

    // Create a row of three movies
    function makeMovieRow(m: JSX.Element[], s: number) {
        return (
            <div
                className="row"
                key={s / 3}
            >
                {m[s]}
                {m[s + 1]}
                {m[s + 2]}
            </div>
        );
    }

    // Create a list of movie rows
    function makeMovieRowList(m: JSX.Element[]) {
        let rows = [];
        for (let i = 0; i < 12; i += 3) {
            rows.push(makeMovieRow(m, i));
        }
        return rows;
    }

    return (
        <>
            <Navbar />
            <div className={`container ${styles["my-container"]}`}>
                {makeMovieRowList(movieLinks)}
            </div>
        </>
    );
}
