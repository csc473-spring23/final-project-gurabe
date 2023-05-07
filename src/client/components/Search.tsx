import styles from "../css/Search.module.css";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

export default function Search() {
    const { search } = useParams(); // Grab parameter content from URL

    return (
        <>
            <Navbar />
            <div className={`container ${styles["my-container"]}`}>
                <p>Search results for "{`${search}`}":</p>
                {/* TODO: Use form data here to interact with API and update the DOM*/}
            </div>
        </>
    );
}

/*
RESOURCES: 

URL Parameters with React: https://ui.dev/react-router-url-parameters
*/
