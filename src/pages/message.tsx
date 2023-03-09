import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import MessageSection from '@/app/components/MessageSection';
import '../app/main.css'
import {useRouter} from 'next/router'

const Message = () => {
    const router = useRouter();
    const {query} = router;
    return(
        <div>
            <Header />
            <MessageSection name={query.id}/>
            <p>query: {query.id}</p>
            <Footer />
        </div>
    )
}

export default Message;