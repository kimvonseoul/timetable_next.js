import {useRouter} from 'next/router'
import Link from 'next/link'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

const profilePage = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
            <Header />
            <p>Post id: {id}</p>
            <Link href='/'>home</Link>
            <Footer />
        </div>
    )
}
export default profilePage;