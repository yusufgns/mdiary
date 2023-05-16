import LoginForm from './login-form'
import {createClient} from '@/utils/supabase/supabase-server'
import { useSupabase } from '@/components/providers/supabase-provider';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
    const supabase = createClient()

    const {data} = await supabase.auth.getSession()
    
    if(data.session) {
        return redirect('/')
    }

    console.log(data)

    return (
        <div className="">
           <LoginForm />
        </div>
    )
}

export default LoginPage