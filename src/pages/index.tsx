import Header from '../app/components/header'
import Footer from '../app/components/footer'
import {useSession} from 'next-auth/react'
import '../app/main.css'
import Main from '@/app/components/main'
import {useDispatch} from 'react-redux';
import { testAction } from '@/app/reducers/test';
import {userCheck} from '../app/reducers/DB/users';
import {useSelector} from 'react-redux';
import { useRouter } from 'next/router';


const Index = () => {
    const {data:session} = useSession();
    const dispatch = useDispatch();
    const onDispatch = () => {
        dispatch(testAction('redux test'));
    }
    console.log(session?.user?.email);
    const check = () => {
        dispatch(userCheck(session?.user?.email))
    }
    check();
    const userState = useSelector((state:any)=>state.user_reducer);
    console.log(userState.data[0].email);
    var mailCheck = false;
    let router= useRouter();
    for(var i of userState.data){
        if(i.email == session?.user?.email) {
            if((i.username == '')||(i.username == ' ')){
                console.log('usrname undefinded');
                router.push('/signin');
            } else {
                console.log('username exist');
                console.log(i.username);
            }
        }
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