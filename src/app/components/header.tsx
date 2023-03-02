import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Header = () => {
    const { data: session } = useSession();
    if(session?.user){
        return(
            <header id="header">
                <h1><Link href='/'>Timetable app with Next.js</Link></h1>
                <p>Hello, {session.user.name}</p>
                <button onClick={() => signOut()}>Log Out</button>
            </header>
    );
    } else {
        return(
            <header id="header">
                <h1><Link href='/'>Timetable app with Next.js</Link></h1>
                <p>Sign in or Sign up!</p>
                <button onClick={()=> signIn()}>Sign in&Sign out</button>
            </header>
        )
    }
}

export default Header;