'use client';
import { useState } from 'react';
import { useSupabase } from '@/components/providers/supabase-provider';
import SocialAuth from '@/components/social-auth'
import { BsDiscord, BsGoogle } from 'react-icons/bs'
import Image from 'next/image'
import {useRouter} from 'next/navigation'





const LoginForm = () => {
    const [ısLogin, setIsLogin] = useState(false)

    const router = useRouter()
    
    const {supabase} = useSupabase()

    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
            },
        })
    }

    

    return (
        <>
            <div className='
                flex
                flex-col
                items-center
                justify-center
                h-screen
                w-full
            '>
                <div className='
                    max-w-[350px]
                    w-[350px]
                '>
                    <div className='
                        mb-[25px]
                    '>
                        <Image 
                            alt="Logo"
                            height="48"
                            width="48"
                            className='mx-auto w-auto'
                            src="/MDiary_dark.svg"
                        />
                    </div>
                    
                    {/* Social Form */}
                    <div className='
                        flex gap-[10px]
                    '>
                        <SocialAuth
                            icon={BsGoogle}
                            onClick={() => signInWithGoogle()}
                        />

                        {/* <SocialAuth
                            icon={BsDiscord}
                            onClick={() => socialAction('discord')}
                        /> */}
                    </div>
                </div>
            </div>
        </>
    )
} 

{/* <SocialAuth
    icon={BsGoogle}
    onClick={() => socialAction('google')}
/> */}

export default LoginForm;