import {useRouter} from 'next/router'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import Main from '@/app/components/main'
import '@/app/main.css'

const profilePage = () => {
    const router = useRouter();
    const {id} = router.query;
    const userData = useSelector((state:any)=>state.user_reducer);
    let dataIndex = 0;
    for (var i of userData.data){
        if(i.username == id){
            break;
        } else {
            dataIndex++;
        }
    }
    let username = userData.data[dataIndex]?.username;
    console.log(username);
    let table_data = userData.data[dataIndex]?.timetable;
    return (
        <div>
            <Header />
            <Main username={username} data={table_data}/>
            <Link href='/'>home</Link>
            <Footer />
        </div>
    )
}
export default profilePage;