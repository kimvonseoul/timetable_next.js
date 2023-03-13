import Link from 'next/link'
import {CgProfile} from 'react-icons/Cg'

const Profile = (props:any) => {
    const userUrl = '/profiles/' + props.username;
    const messageUrl = '/message?to=' + props.username;

    const followOnclick = () => {
        props.followOnclick(props.username);
    }
    const unfollow = () => {

    }
    return(
        <div id='profile-component'>
            <Link href={userUrl}>
                <CgProfile className='profile_icon' size={30}/>
                <div id='profile_info'>
                    <h4>{props.name}</h4>
                    <h5>@{props.username}</h5>
                </div>
            </Link>
            {(props.isFollowing)&&<Link href='/follow' className='profile_header_btn'>unfollow</Link>}
            {(!props.isFollowing)&&<Link href='/follow' className='profile_header_btn'>follow</Link>}
            <button className='profile_header_btn' onClick={followOnclick}>follow</button>
            <Link href={messageUrl} 
            className='profile_header_btn'>message</Link>
        </div>
    )
}
export default Profile;