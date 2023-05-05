import styles from "../css/Login.module.css";

export default function Login() {
    return (
        <main className={styles["main"]}>
            <div>
                <h1>CinemaShare</h1>
                <h2>Login</h2>
                <form
                    id="login-form"
                    method="POST"
                    className={styles["form"]}
                >
                    <div className={styles["form-item"]}>
                        <p>Email</p>
                        <input
                            type="email"
                            name="email"
                            required
                        />
                    </div>

                    <div className={styles["form-item"]}>
                        <p>Password</p>
                        <input
                            type="password"
                            name="password"
                            required
                        />
                    </div>

                    <input
                        type="submit"
                        value="Login"
                        className={`btn ${styles["form-submit"]} ${styles["my-btn"]}`}
                    />
                </form>

                <p>
                    Don't have an account? <a href="/sign-up">Sign Up</a>
                </p>
            </div>
        </main>
    );
}
