import "./css/App.css";
import { Route, Routes } from "react-router-dom"; // React tools for routing (multiple pages)


import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Account from "./components/Account";
import MovieInfo from "./components/MovieInfo";
import MovieUpload from "./components/MovieUpload";
import Search from "./components/Search";

function App() {
    return (
        <div className="App">
            {/* Routes for the web app */}
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/movie-search/:search"
                    element={<Search />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
                <Route
                    path="/account"
                    element={<Account />}
                />
                <Route
                    path="/movie-info"
                    element={<MovieInfo />}
                />
                <Route
                    path="/movie-upload"
                    element={<MovieUpload />}
                />
            </Routes>
        </div>
    );
    // TODO: Handle undefined routes
}

export default App;
