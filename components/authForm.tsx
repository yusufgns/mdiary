'use client'
import SocialAuth from './social'
import { useSupabase } from '@/components/providers/supabase-provider';
import { BsDiscord, BsGoogle } from 'react-icons/bs'
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export default function PasswordStrength() {
  const [load, setLoad] = useState(false)

  useEffect(() => {
      setLoad(true)
  }, [])

  function getUrl() {
    let url =
    "http://localhost:3000/auth";
    url = url.includes("http") ? url : `https://${url}`;
    return url;
  }

  const {supabase} = useSupabase()

    async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: getUrl()
      },
    });
  }

  return (
    <div>
        {load && 
          <div>
            <div className='relative'>
              </div>
              <div>
                <div className='mt-[20px] relative flex items-center py-[25px] pt-[50px] justify-center'>
                  <hr className='h-1 w-full' />
                  <div className='w-full text-center dark:bg-[#121212] mb-1'>Register / Login</div>
                  <hr className='h-1 w-full' />
                </div>
              </div>
              <div className='mb-[20px]'>
                <SocialAuth onClick={signInWithGoogle} icon={BsGoogle}></SocialAuth>
              </div>
          </div>
        }
    </div>
  );
}