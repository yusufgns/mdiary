import {createClient} from '../../utils/supabase/supabase-server'
import {redirect} from 'next/navigation'
import Avatar from '../../components/UserProfil/Avatar'
import UserHeader from '../../components/UserProfil/UserHeader'
import Entries from '@/components/UserProfil/Entries'

interface userDataI {
    id: string | null,
    username: string | null,
    first_name: string | null,
    last_name: string | null,
    description: string | null,
    create_at: string
}

export default async function User({
  params,
}: {
  params: any
}) {

    const supabase = createClient()
    const {data: activeSession} = await supabase.auth.getSession()
    const {data: getUser} = await supabase.auth.getUser()

    if(!activeSession.session) {
        return redirect('/')
    }
    const image = getUser.user?.user_metadata.avatar_url || ''
    const name = getUser.user?.user_metadata.name || ''
    
    return (
        <div className='
            w-[576px]
            max-w-[576px]
            h-screen
            m-auto
            '>
             <Avatar image={image} name={name}></Avatar>
             <Entries params={params} image={image} name={name}></Entries>
        </div>
    )
}