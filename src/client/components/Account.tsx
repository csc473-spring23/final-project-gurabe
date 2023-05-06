import styles from "../css/Account.module.css";

export default function Account() {
    // https://github.com/facebook/create-react-app/issues/11155
    return (
        <main className={styles["main"]}>
            <div className={`row ${styles["my-row"]}`}>
                <div className={`col-6 ${styles["my-col-6"]}`}>
                    <img
                        id={styles["user-pfp"]}
                        src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
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
