import {CgProfile} from 'react-icons/Cg'
import Link from 'next/link'
import {useSelector} from 'react-redux'
const TbHeader = (props:any) => {
    const userState = useSelector((state:any)=>state.user_reducer);
    
    return (
        <div>
            <CgProfile className='profile_icon' size={50}/>
            <h3>name</h3>
            <h4>@username</h4>
            <Link href='/message'>message</Link>
            <Link href='/follow'>follow</Link>
            <h2>My Timetable</h2>
        </div>
    )
}

export default TbHeader;