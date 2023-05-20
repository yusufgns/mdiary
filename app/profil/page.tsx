import {createClient} from '@/utils/supabase/supabase-server'
import CreateProfil from '@/components/Profil/CreateProfil'

export default async function Profil() {

    const supabase = createClient()
    const {data: activeSession} = await supabase.auth.getUser()

    const deneme = (await supabase.from('user').select('*'))
    
    if(deneme && deneme.data && deneme.data.length > 0) {
        deneme.data[0]?.first_name
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