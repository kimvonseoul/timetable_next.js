import ProfileSection from "./profileSection";
import Timetable from "./timetable";
const Main = (props:any) => {
    return (
        <div id="main">
            <Timetable username={props.username} data={props.data}/>
            <hr id='section-divider'/>
            <ProfileSection />
        </div>
    )
}

export default Main;