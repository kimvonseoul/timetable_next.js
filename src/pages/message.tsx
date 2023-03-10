import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import MessageSection from '@/app/components/MessageSection';
import '../app/main.css'
import {useRouter} from 'next/router'
import {useSession} from 'next-auth/react'
import {useSelector} from 'react-redux'
import { useState } from 'react';

const Message = () => {
    const {data: session} = useSession();
    const messageState = useSelector((state:any)=> state.message_reducer);
    const userState = useSelector((state:any)=>state.user_reducer);
    const router = useRouter();
    const {query} = router;
    messageState.data.map((e:any)=>{
        if(((e.user1 == userState.data[userState.userIndex].username)&&(e.user2 == query.to))||((e.user1 == query.to)&&(e.user2 == userState.data[userState.userIndex].username))) {
            console.log('vaild check');
        }
    })
    return(
        <div>
            <Header />
            <MessageSection name={query.to}/>
            <p>query: {query.to}</p>
            <Footer />
        </div>
    )
}

export default Message;