import Header from '../app/components/header'
import Footer from '../app/components/footer'
import {useSession} from 'next-auth/react'
import '../app/main.css'
import Main from '@/app/components/main'
import {useDispatch} from 'react-redux';
import { testAction } from '@/app/reducers/test'

const Index = () => {
    const {data:session} = useSession();
    const dispatch = useDispatch();
    const onDispatch = () => {
        dispatch(testAction('redux test'));
    }
    return(
        <>
            <Header/>
            <button onClick={onDispatch}>click</button>
            <Main />
            <Footer />
        </>
    )
}

export default Index;