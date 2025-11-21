import { Link } from "react-router";
import Tile from "../../common/Tile";
import { useState } from "react";

const MemorySpotPage = () => {
    let [showAdd, setShowAdd] = useState(false);
    return (
        <main>
            <div className="main-page-header">

                <div className="sub-nav">
                    <Link to="/home" className="link">Home</Link>
                </div>

                <h3>Memory Spot</h3>
            </div>

            <div className="add-link">
                <a className="link" onClick={() => setShowAdd(true)} ><span>+</span>Add memory</a>
            </div>

            <div id="main-content-memory">
                <Link className="link">
                    <Tile text="Cherished Memory1" />
                </Link>

                <Link className="link">
                    <Tile text="Cherished Memory2" />
                </Link>
            </div>

            {
                showAdd &&
                (<div className="mask-layer">
                    <div className="popup-container">
                        <h4>Add Memorable Pictures or music</h4>
                        <input type="text" name="caption" placeholder="Name" />
                        <input type="text" name="date&time" placeholder="Date and Time" />
                        <textarea name="notes" rows={5} placeholder="Notes" ></textarea>
                        <input type="url" name="link" placeholder="Link" pattern="https?://.*"
                          title="Please enter a URL"></input>
                        <button type="submit">Save</button>
                        <button onClick={() => setShowAdd(false)}>Cancel</button>
                    </div>
                </div>
                )
            }


        </main>
    )
}
export default MemorySpotPage;