import {createClient} from '@/utils/supabase/supabase-server'
import {redirect} from 'next/navigation'
import Deneme from './AuthButton'
import Profil from '@/components/ProfilHeader/ProfilsComponent'
import ContentDiary from '@/components/ProfilContent/ContainersProfil'

export default async function Home() {
    const supabase = createClient()
    const {data: activeSession} = await supabase.auth.getSession()
 
    if(!activeSession.session) {
        return redirect('/')
    }

    return (
        <>
        <div className='
            w-[576px]
            max-w-[576px]
            h-screen
            m-auto
        '>
            
            <Deneme></Deneme>
            <Profil></Profil>
            <ContentDiary></ContentDiary>
        </div>
        </>
    )
}

