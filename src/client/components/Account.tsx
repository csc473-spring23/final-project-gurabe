import styles from "../css/Account.module.css";

export default function Account() {
    // https://github.com/facebook/create-react-app/issues/11155
    return (
        <main className={styles["main"]}>
            <div className={`row ${styles["my-row"]}`}>
                <div className={`col-6 ${styles["my-col-6"]}`}>
                    <img
                        id={styles["user-pfp"]}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/360px-Checkerboard_pattern.svg.png"
                    />
                </div>
                <div className={`col-6 ${styles["my-col-6"]}`}>
                    <p
                        id={styles["username"]}
                        className={styles["account-item"]}
                    >
                        Username
                    </p>
                    <a
                        className={`btn ${styles["account-item"]} ${styles["my-btn"]}`}
                        href="/movie-upload"
                    >
                        Upload
                    </a>
                    <a
                        className={`btn ${styles["account-item"]} ${styles["my-btn"]}`}
                        href="/login"
                    >
                        Log Out
                    </a>
                    <a
                        className={`btn ${styles["account-item"]} ${styles["my-btn"]}`}
                        href="/"
                    >
                        Back
                    </a>
                </div>
            </div>
        </main>
    );
}
