import styles from "../css/SignUp.module.css";

export default function SignUp() {
    return (
        <main className={styles["main"]}>
            <div>
                <h1>CinemaShare</h1>
                <h2>Sign Up</h2>
                <form
                    id="login-form"
                    method="POST"
                    className={styles["form"]}
                >
                    <div className={styles["form-item"]}>
                        <p>Name</p>
                        <input
                            type="text"
                            name="name"
                            required
                            className={styles["form-input"]}
                        />
                    </div>

                    <div className={styles["form-item"]}>
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            required
                            className={styles["form-input"]}
                        />
                    </div>

                    <div className={styles["form-item"]}>
                        <p>Date of Birth</p>
                        <input
                            type="date"
                            name="dob"
                            required
                            className={styles["form-input"]}
                        />
                    </div>

                    <div className={styles["form-item"]}>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            required
                            className={styles["form-input"]}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Sign Up"
                        className={`btn ${styles["form-submit"]} ${styles["my-btn"]}`}
                    />
                </form>

                <p>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </main>
    );
}
