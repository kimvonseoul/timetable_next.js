import Profile from "./profile"
import {useSelector, useDispatch} from 'react-redux'
import {follow, unfollow} from '@/app/reducers/DB/users'

const ProfileSection = (props:any) => {
    const dispatch = useDispatch();
    const userState = useSelector((state:any) => state.user_reducer);
    const userIndex = userState.userIndex;
    console.log(userIndex + 'tb');
    const following_data = userState?.data[userIndex]?.following;
    console.log(following_data);
    const followOnclick = (e:any) => {
        const data = {
            into : userIndex,
            username: e
        }
        console.log('follow test ' + e);
        dispatch(follow(data));
    }
    return(
        <div id='profile_section'>
            <section id='search-section'>
                <input id='profile-search-input' type="text" placeholder='search profiles'/>
                <button>search</button>
            </section>
            <section className='in-profile-section'>
                <h3>Following</h3>
                {(following_data == undefined)&&(
                    <p>Log in to see your following</p>
                )}
                {(following_data != undefined)&&(following_data.map((e:any, k:any)=>{
                    let isFollowing = false;
                    userState.data[e].following.map((e:any, k:any)=>{
                        if(e == userIndex){
                            isFollowing = true;
                        }
                    })
                    console.log(isFollowing);
                    return <Profile  key={k} 
                    name={userState.data[e].name} 
                    username={userState.data[e].username} 
                    isFollowing={isFollowing}
                    followOnclick = {followOnclick} />
                }))}
            </section>
            <section className='in-profile-section'>
                <h3>recommend</h3>
                <Profile name='dummy3' username='dummydata3' followOnclick = {followOnclick}/>
            </section>
        </div>
    )
}
export default ProfileSection;