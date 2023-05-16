import {createClient} from '@/utils/supabase/supabase-server'

export default async function Profil() {

    const supabase = createClient()
    const {data: activeSession} = await supabase.auth.getUser()

    const deneme = (await supabase.from('user').select('*'))
    
    if(deneme && deneme.data && deneme.data.length > 0) {
        deneme.data[0]?.first_name
    }
    
    
    return (
        <div>
            PORFİL
        </div>
    )
}