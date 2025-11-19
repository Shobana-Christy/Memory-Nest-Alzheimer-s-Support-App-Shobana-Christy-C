import { Link } from "react-router";

const AboutUsPage = () => {

    return (

        <main>

            <div className='main-page-header'>

                <div className='sub-nav'>
                    <Link to="/home" className='link'>Home</Link>
                </div>
                <h3>About Memory Nest</h3>
            </div>
            <div id='main-content-about-us'>
                <p> Memory Nest is a compassionate support application,
                    designed for individuals living with Alzheimer's and their caregivers.
                    Our mission is to help users maintain daily routines, reconnect with
                    cherished memories, and stay mentally and emotionally engaged -
                    all through personalized reminder, music, photos & calming activities.
                </p>
            </div>
        </main>
        
    )


}
export default AboutUsPage;