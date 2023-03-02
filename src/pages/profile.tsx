import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Pfsetting from "@/app/components/pfsetting";
import Timetable from "@/app/components/timetable";
import '../app/main.css'

const Profile = () => {
    return(
        <>
            <Header />
            <div id="main">
                <Timetable />
                <Pfsetting />
            </div>
            <Footer />
        </>
    )
}

export default Profile;