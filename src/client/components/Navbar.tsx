import styles from "../css/Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
    const [search, setSearch] = useState(""); // Create a state for the search input

    // Function called when the user clicks the "Search" button
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        location.href = `/movie-search/${search}`; // Redirect to Search page using search input
    }

    return (
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
                    onSubmit={handleSubmit}
                >
                    <input
                        className="form-control me-2"
                        type="search"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                        required
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
    );
}

/*
RESOURCES: 

Using Forms with React: https://www.w3schools.com/react/react_forms.asp
useState(): https://react.dev/reference/react/useState
Form Event Type: https://stackoverflow.com/questions/56322667/how-to-type-a-form-component-with-onsubmit
*/
