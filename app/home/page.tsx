import {createClient} from '@/utils/supabase/supabase-server'
import {redirect} from 'next/navigation'
import Deneme from './AuthButton'

export default async function Home() {
    const supabase = createClient()
    const {data: activeSession} = await supabase.auth.getSession()
 
    if(!activeSession.session) {
        return redirect('/')
    }

    return (
        <>
            <Deneme></Deneme>  
            HOME PAGE
        </>
    )
}

