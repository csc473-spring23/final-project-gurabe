import styles from "../css/Home.module.css";
import Navbar from "./Navbar";

export default function Home() {
    return (
        <>
            <Navbar />

            <div className={`container ${styles["my-container"]}`}>
                <div className={`row ${styles["my-row"]}`}>
                    <a
                        className={`col-4 ${styles["movie"]}`}
                        href="/movie-info"
                    ></a>
                    <a
                        className={`col-4 ${styles["movie"]}`}
                        href="/movie-info"
                    ></a>
                    <a
                        className={`col-4 ${styles["movie"]}`}
                        href="/movie-info"
                    ></a>
                </div>
                <div className={`row ${styles["my-row"]}`}>
                    <a
                        className={`col-4 ${styles["movie"]}`}
                        href="/movie-info"
                    ></a>
                    <a
                        className={`col-4 ${styles["movie"]}`}
                        href="/movie-info"
                    ></a>
                    <a
                        className={`col-4 ${styles["movie"]}`}
                        href="/movie-info"
                    ></a>
                </div>
                <div className={`row ${styles["my-row"]}`}>
                    <a
                        className={`col-4 ${styles["movie"]}`}
                        href="/movie-info"
                    ></a>
                    <a
                        className={`col-4 ${styles["movie"]}`}
                        href="/movie-info"
                    ></a>
                    <a
                        className={`col-4 ${styles["movie"]}`}
                        href="/movie-info"
                    ></a>
                </div>
            </div>
        </>
    );
}
