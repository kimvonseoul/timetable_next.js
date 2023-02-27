import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Login() {
  const { data: session } = useSession();
  const handleSignIn = () => {
    signIn('google', { login_hint: 'kimvonseoul@gmail.com' })
  }
  if (session?.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Link href='/'>home</Link>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={handleSignIn}>Sign in</button>
    </>
  )
  }