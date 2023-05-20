'use client'

import Image from "next/image";
import supabase from '@/utils/supabase/supabase-client';
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export interface headerDataI {
  created_at: string | null;
  description: string | null;
  first_name: string | null;
  id: string | null;
  last_name: string | null;
  username: string | null;
}

interface Header {
    params : { user: string }
}

export default function UserHeader({ params }: Header ) {
  const [data, setData] = useState<headerDataI | null>(null);

  const param = params.user;

  useEffect(() => {
    const fetchData = async () => {
      const { data: user, error } = await supabase
        .from('user')
        .select()
        .eq('username', param);

      if (!user || error) {
        redirect('/');
      }

      setData(user?.[0] || null);
    };

    fetchData();
  }, [param]);

  return (
    <>
      {data && (
        <div className='flex flex-col gap-[20px] max-h-[350px]'>
          <div className='flex items-center mx-[8px] mt-[25px]'>
            <div className='mr-[25px] rounded-full'>
              <Image
                className='rounded-full'
                src=''
                alt='PROFIL'
                width={96}
                height={96}
              />
            </div>
            <div className='flex flex-col gap-[0.10rem]'>
              <h1 className='font-bold'>{data.first_name} {data.last_name}</h1>
              <h3>@{data.username}</h3>
              <div>Social Link List</div>
            </div>
          </div>
          <div>
            <p className='dark:text-[#8D8D8D] break-words text-ellipsis max-w-[550px] mx-[8px]'>
              {data.description}
            </p>
          </div>
          <hr className='dark:opacity-50' />
        </div>
      )}
    </>
  );
}
