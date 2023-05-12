import {createClient} from '@/utils/supabase/supabase-server'
import Button from '../uı/Button/TextArea'
import Profil from '../components/ProfilHeader/ProfilsCon'
import ContentDiary from '@/components/ProfilContent/ContentDiray'

export default async function Home() {
  const supabase = createClient()
  const {data: activeSession} = await supabase.auth.getSession()

  return (
    <>
      <div className='
        w-[576px]
        max-w-[576px]
        h-screen
        m-auto
      '>
        <Profil></Profil>
        <ContentDiary></ContentDiary>
      </div>
    </>
  )
}
