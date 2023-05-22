import {createClient} from '../../../utils/supabase/supabase-server'
import Avatar from '../../../components/UserProfil/Avatar'
import UserHeader from '../../../components/UserProfil/UserHeader'
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
  params: { user: string };
}) {
  
    const supabase = createClient()
    const { data: entriesData } = await supabase
        .from('entries')
        .select('*')
    const {data: activeSession} = await supabase.auth.getSession()
    const {data: getUser} = await supabase.auth.getUser();

    const ids = getUser.user?.id
    
    const image = getUser.user?.user_metadata.avatar_url || ''
    const name = getUser.user?.user_metadata.name || ''

    const {data : userData} = await supabase.from('user').select('*').eq('id', ids)
    
    return (
        <div className='
            w-[576px]
            max-w-[576px]
            h-screen
            m-auto
            '>
            <UserHeader params={params}></UserHeader>
            <Avatar image={image} name={name} userData={userData}></Avatar>
            <Entries params={params}></Entries>
        </div>
    )
}