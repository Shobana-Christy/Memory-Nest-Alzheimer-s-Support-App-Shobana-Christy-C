import { Link } from "react-router";
import './pages.css';
import Tile from "../common/Tile";

const HomePage = () => {

    const pages = [
        {
            name: "Reminders",
            path: "/reminders"
        },
        {
            name: "Memory Spot",
            path: "/memoryspot"
        },
        {
            name: "Engagement Center",
            path: "/engagementcenter"
        },
    ];

    return (
        <main>
             <h3 className="home-intro">
                Every memory matters, and we are here to support you with reminders and activities that brighten each day.
            </h3>
            <div id="main-content-home">
                {
                    pages.map(page => (
                        <div className="page-box">
                            <Link to={page.path} className="link">
                                <Tile text={page.name} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default HomePage;