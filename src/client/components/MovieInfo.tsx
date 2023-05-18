import styles from "../css/MovieInfo.module.css";
import { useLocation } from "react-router-dom";

export default function MovieInfo(item: any) {
    const location = useLocation();
    const movie = location.state?.movie;
    const genre = location.state?.genre;

    return (
        <>
            <div className={`row ${styles["my-row"]}`}>
                <div className={`col-4 ${styles["my-col"]}`}>
                    <a
                        className={`btn ${styles["my-btn"]}`}
                        href="/"
                    >
                        Back
                    </a>
                </div>
                <div className={`col-4 ${styles["movie"]} ${styles["my-col"]}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                        alt={`${movie?.overview}`}
                    />
                </div>
                <div className={`col-4 ${styles["my-col"]}`}>
                    <a
                        className={`btn ${styles["my-btn"]}`}
                        href="https://youtu.be/dQw4w9WgXcQ"
                        target="_blank"
                    >
                        Watch
                    </a>
                </div>
            </div>

            <div className={`container ${styles["my-container"]}`}>
                <h1>{movie?.title}</h1>
                <h2>
                    {movie?.release_date.substring(0, 4)}{" "}
                    {String.fromCharCode(183)} {genre}
                </h2>
                <p>{movie?.overview}</p>
            </div>
        </>
    );
}
