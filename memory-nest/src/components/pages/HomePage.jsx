import { Link } from "react-router";
import './pages.css';
import Tile from "../common/Tile";

const HomePage = () => {
    return (
        <main>
            <div id="main-content-home">
                <div className="reminders">
                    <Link to='/reminders' className="link">
                        <Tile text="Reminders" />
                    </Link>
                </div>

                <div className="memoryspot">
                    <Link to='/memoryspot' className="link">
                        <Tile text="Memory Spot" />
                    </Link>
                </div>

                <div className="memoryspot">
                    <Link to='/engagementcenter' className="link">
                        <Tile text="Engagement Center" />
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default HomePage;