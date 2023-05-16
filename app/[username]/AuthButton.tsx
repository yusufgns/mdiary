'use client'
import {useSupabase} from '../../components/providers/supabase-provider'

export default function Logout() {
    const {supabase} = useSupabase()

    return (
        <div>
            <button onClick={async () => await supabase.auth.signOut()}>
                Logout
            </button>
        </div>
    )
}