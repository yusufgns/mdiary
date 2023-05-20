'use client'
import Password from './authPassword'
import Email from './authEmail'
import SocialAuth from './social'
import { useSupabase } from '@/components/providers/supabase-provider';
import { BsDiscord, BsGoogle } from 'react-icons/bs'
import { useEffect, useState } from 'react';

export default function PasswordStrength() {
  const [load, setLoad] = useState(false)

  useEffect(() => {
      setLoad(true)
  }, [])

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
    <div>
        {/* <Password /> */}
        {load && 
          <div>
            <Email />
          </div>
        }
    </div>
  );
}