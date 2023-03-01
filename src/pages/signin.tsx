import Header from '../app/components/header'
import {useSession} from 'next-auth/react'
import {useDispatch, useSelector} from 'react-redux'
import '../app/main.css'
import { useState } from 'react'
import { updateUsername } from '@/app/reducers/DB/users'
import Link from 'next/link'

const SignIn = () => {
    const {data: session} = useSession();
    const userState = useSelector((state:any)=>state.user_reducer);
    let userId:number;
    for(var i of userState.data) {
        if(i.email == session?.user?.email){
            userId = i.id;
        }
    }
    const dispatch = useDispatch();
    const [idInput, setIdInput] = useState('');
    const inputOnchange = (e:any) => {
        e.preventDefault();
        setIdInput(e.target.value);
        console.log(idInput);
    }
    const idUpdate = (e:any) => {
        e.preventDefault();
        console.log(idInput);
        console.log('submitted')
        const data = {
            id: userId,
            updatedId: idInput
        };
        dispatch(updateUsername(data));
        console.log(userState.data[userId -1].username);
    }
    return(
        <>
            <Header />
            <p>signIn plz</p>
            <form id='set_username' onSubmit={idUpdate}>
                <input type="text" placeholder='@example' value={idInput} onChange={inputOnchange}/>
                <button>click</button>
            </form>
            <Link href='/'>home</Link>
        </>
        
    )
}

export default SignIn;