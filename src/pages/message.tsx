import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import MessageSection from '@/app/components/MessageSection'
import '../app/main.css'
import {useRouter} from 'next/router'
import {useSession} from 'next-auth/react'
import {useSelector, useDispatch} from 'react-redux'
import { addDB } from '@/app/reducers/DB/messages'

const Message = () => {
    const {data: session} = useSession();
    const dispatch = useDispatch();
    const messageState = useSelector((state:any)=> state.message_reducer);
    const userState = useSelector((state:any)=>state.user_reducer);
    const router = useRouter();
    const {query} = router;
    let messageData;
    let isCheck = false;
    messageState.data.map((e:any)=>{
        if(((e.user1 == userState.data[userState.userIndex].username)&&(e.user2 == query.to))||((e.user1 == query.to)&&(e.user2 == userState.data[userState.userIndex].username))) {
            messageData = e;
            console.log(messageData);
            isCheck = true;
        }
    });
    if(isCheck == false) {
        messageData;
        let data = {
            user1: userState.data[userState.userIndex].username,
            user2: query.to
        }
        dispatch(addDB(data));
    }
    return(
        <div>
            <Header />
            <MessageSection name={query.to} data={messageData}/>
            <p>query: {query.to}</p>
            <Footer />
        </div>
    )
}

export default Message;