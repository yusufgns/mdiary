import {createClient} from '@/utils/supabase/supabase-server'
import CreateProfil from '@/components/Profil/CreateProfil'

export default async function Profil() {

    const supabase = createClient()
    const {data: activeSession} = await supabase.auth.getUser()

    const dateN = await supabase.from('user').select('*')
    
    if(dateN && dateN.data && dateN.data.length > 0) {
        dateN.data[0]?.first_name
    }

    
    
    return (
        <div className='
            w-[576px]
            max-w-[576px]
            h-screen
            m-auto
            '>
            PORFİL
        </div>
    )
}