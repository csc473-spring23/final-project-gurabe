import styles from "../css/Home.module.css";

export default function Home() {
    return (
        <>
            <nav className={`navbar sticky-top ${styles["my-navbar"]}`}>
                <div className="container-fluid">
                    <a
                        id={`${styles["home-link"]}`}
                        href="/"
                    >
                        CinemaShare
                    </a>

                    <form
                        className="d-flex"
                        role="search"
                    >
                        <input
                            className="form-control me-2"
                            type="search"
                            aria-label="Search"
                        />
                        <button
                            className={`btn ${styles["my-btn"]}`}
                            type="submit"
                        >
                            Search
                        </button>
                    </form>

                    <a href="/account">
                        <img
                            id={`${styles["pfp"]}`}
                            src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
                        />
                    </a>
                </div>
            </nav>

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
