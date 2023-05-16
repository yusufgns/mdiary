import AuthButton from '../../components/AuthButton'
import Profil from '@/components/ProfilHeader/ProfilsComponent'
import ContentDiary from '@/components/ProfilContent/ContainersProfil'
import {createClient} from '@/utils/supabase/supabase-server'
import {redirect} from 'next/navigation'


export default async function Username(
    {params} : {
      params: { username: string };
      // searchParams?: { [key: string]: string | undefined };
    }
    ) {

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
          <AuthButton></AuthButton>
          <Profil></Profil>
          <ContentDiary params={params}></ContentDiary>
      </div>
    </>
  )
}