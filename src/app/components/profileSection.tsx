import Profile from "./profile"
import {useSelector} from 'react-redux'

const ProfileSection = () => {
    const userState = useSelector((state:any) => state.user_reducer);
    const userIndex = userState.userIndex;
    console.log(userIndex + 'tb');
    const following_data = userState.data[userIndex].following;
    console.log(following_data);
    return(
        <div id='profile_section'>
            <section id='search-section'>
                <input id='profile-search-input' type="text" placeholder='search profiles'/>
                <button>search</button>
            </section>
            <section id='following-section'>
                <h3>Following</h3>
                {following_data.map((e:any, k:any)=>{
                    return <Profile  key={k} name={userState.data[e].name} username={userState.data[e].username} />
                })}
            </section>
            <section id='recommend-section'>
                <h3>recommend</h3>
                <Profile name='kim' username='kimvonseoul'/>
            </section>
        </div>
    )
}
export default ProfileSection;