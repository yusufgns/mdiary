import AuthForm from '../../components/authForm'
import {createClient} from '@/utils/supabase/supabase-server'
import { useSupabase } from '@/components/providers/supabase-provider';
import { redirect } from 'next/navigation';


const LoginPage = async () => {
    const supabase = createClient()

    const {data} = await supabase.auth.getSession()
    
    if(data.session) {
        return redirect('/')
    }

    return (
        <div className='
            w-[350px]
            max-w-[350px]
            h-screen
            m-auto
            '>
                <div className='h-screen w-[350px] max-w-[350px] flex flex-col justify-center'>
                    <div>
                        <AuthForm />
                    </div>
                </div>
        </div>
    )
}

export default LoginPage