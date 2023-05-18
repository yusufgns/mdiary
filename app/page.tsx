import {createClient} from '@/utils/supabase/supabase-server'
import Button from '../uı/Button/TextArea'
import Profil from '../components/ProfilHeader/ProfilsComponent'
import ContentDiary from '@/components/ProfilContent/ContainersProfil'

export default async function Home() {
  const supabase = createClient()
  const {data: activeSession} = await supabase.auth.getUser()
  return (
    <>
      <div className='
        w-[576px]
        max-w-[576px]
        h-screen
        m-auto
      '>
        HOME PAGE
      </div>
    </>
  )
}
