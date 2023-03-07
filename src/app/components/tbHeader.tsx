import Link from 'next/link'
import {useSelector} from 'react-redux'
import Profile from './profile'
import {CgProfile} from 'react-icons/Cg'

const TbHeader = (props:any) => {
    const userState = useSelector((state:any)=>state.user_reducer);
    
    return (
        <div id='table-header'>
            <CgProfile className='profile_icon' size={50}/>
            <h2>@{props.username}'s Timetable</h2>
            <Link href='/follow' className='profile_header_btn'>follow</Link>
                <Link href='/message' className='profile_header_btn'>message</Link>
        </div>
    )
}

export default TbHeader;