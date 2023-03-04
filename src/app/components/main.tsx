import ProfileSection from "./profileSection";
import Timetable from "./timetable";
const Main = () => {
    return (
        <div id="main">
            <Timetable />
            <hr id='section-divider'/>
            <ProfileSection />
        </div>
    )
}

export default Main;