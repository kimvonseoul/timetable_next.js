import Link from 'next/link'
import {CgProfile} from 'react-icons/Cg'

const Profile = () => {
    return(
        <div id='profile-component'>
                <CgProfile className='profile_icon' size={50}/>
                <div id='profile_info'>
                    <h3>name</h3>
                    <h4>@username</h4>
                </div>
                <Link href='/follow' className='profile_header_btn'>follow</Link>
                <Link href='/message' className='profile_header_btn'>message</Link>
            </div>
    )
}
export default Profile;