import Link from 'next/link'
import {CgProfile} from 'react-icons/Cg'

const Profile = (props:any) => {
    const userUrl = '/profiles/' + props.username;
    const messageUrl = '/message/' + props.username;
    return(
        <div id='profile-component'>
            <Link href={userUrl}>
                <CgProfile className='profile_icon' size={30}/>
                <div id='profile_info'>
                    <h4>{props.name}</h4>
                    <h5>@{props.username}</h5>
                </div>
            </Link>
            <Link href='/follow' className='profile_header_btn'>follow</Link>
            <Link href={messageUrl} className='profile_header_btn'>message</Link>
        </div>
    )
}
export default Profile;