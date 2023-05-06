import styles from "../css/MovieInfo.module.css";

export default function MovieInfo() {
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
                <div className={`col-4 ${styles["movie"]}`}></div>
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
                <h1>Movie Title</h1>
                <h2>Year {String.fromCharCode(183)} Genre</h2>
                <p>Description</p>
            </div>
        </>
    );
}
