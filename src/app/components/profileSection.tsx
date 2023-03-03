import Profile from "./profile";

const ProfileSection = () => {
    return(
        <div id='profile_section'>
            <section id='search-section'>
                <input id='profile-search-input' type="text" placeholder='search profiles'/>
                <button>search</button>
            </section>
            <section id='following-section'>
                <h3>Following</h3>
                <Profile />
                <Profile />
            </section>
            <section id='recommend-section'>
                <h3>recommend</h3>
                <Profile />
            </section>
        </div>
    )
}
export default ProfileSection;