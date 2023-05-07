import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // React tools for routing (multiple pages)
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Router>
        <App />
    </Router>
);
