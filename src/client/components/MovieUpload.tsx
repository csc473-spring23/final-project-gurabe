import styles from "../css/MovieUpload.module.css";

export default function MovieUpload() {
    return (
        <main className={styles["main"]}>
            <form
                id="movie-upload-form"
                method="POST"
            >
                <div className={styles["form-item"]}>
                    <p>Title</p>
                    <input
                        type="text"
                        name="title"
                        required
                        className="form-input"
                    />
                </div>

                <div className={styles["form-item"]}>
                    <p>Year</p>
                    <input
                        type="text"
                        name="year"
                        required
                        className="form-input"
                    />
                </div>

                <div className={styles["form-item"]}>
                    <p>Genre</p>
                    <input
                        type="text"
                        name="genre"
                        required
                        className="form-input"
                    />
                </div>

                <div className={styles["form-item"]}>
                    <p>Poster</p>
                    <input
                        type="text"
                        name="poster"
                        required
                        className="form-input"
                    />
                </div>

                <input
                    type="submit"
                    value="Upload"
                    className={`btn form-submit ${styles["my-btn"]}`}
                />

                <a
                    className={`btn ${styles["my-btn"]}`}
                    href="/account"
                >
                    Back
                </a>
            </form>
        </main>
    );
}
