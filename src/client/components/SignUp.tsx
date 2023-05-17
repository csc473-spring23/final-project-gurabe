import styles from "../css/SignUp.module.css";
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [userNameReg, setUserNameReg]= useState("");
    const [passwordReg, setPasswordReg]= useState("");

    const register = () => {
        Axios.post('http://localhost:3000/register', {
        username: userNameReg,
        password: passwordReg,
        })
        .then((response) => {
            console.log(response);
            navigate('/login');
        })
        .catch((error) => {
            console.error('Error registering user:', error);
        });
    };
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
                            onChange={(e)=>{
                                setUserNameReg(e.target.value);
                            }}
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
                            onChange={(e)=>{
                                setPasswordReg(e.target.value);
                            }}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Sign Up"
                        className={`btn ${styles["form-submit"]} ${styles["my-btn"]}`}
                        onClick={register}
                    />
                </form>

                <p>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </main>
    );
}
