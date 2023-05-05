import "../css/Home.css";

export default function Home() {
    return (
        <>
            <nav className="navbar sticky-top semi-dark-cont">
                <div className="container-fluid">
                    <a
                        id="home-link"
                        href="/"
                        className="nav-text home"
                    >
                        CinemaShare
                    </a>

                    <form
                        className="d-flex"
                        role="search"
                    >
                        <input
                            className="form-control me-2"
                            type="search"
                            aria-label="Search"
                        />
                        <button
                            className="btn"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>

                    <a href="/account">
                        <img
                            id="pfp"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Checkerboard_pattern.svg/360px-Checkerboard_pattern.svg.png"
                        />
                    </a>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-4 movie"></div>
                    <div className="col-4 movie"></div>
                    <div className="col-4 movie"></div>
                </div>
                <div className="row">
                    <div className="col-4 movie"></div>
                    <div className="col-4 movie"></div>
                    <div className="col-4 movie"></div>
                </div>
            </div>
        </>
    );
}
