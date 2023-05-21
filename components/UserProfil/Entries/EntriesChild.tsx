'use client'
import React, { useEffect } from 'react'
import ContentSituation from '../../UserProfil/ContentSituation';
import EntriesDetail from './EntriesDetail';
import supabase from '@/utils/supabase/supabase-client';
import { useRouter } from 'next/navigation';

export interface ChildData {
  id?: number | null;
  content?: string | null;
  title?: string | null;
  username?: string | null;
  children_uid?: string | null;
  create_time?: string | null;
  situation: string | null
}

export interface EntryData {
  id: number | null;
  content: string | null;
  title: string | null;
  username: string | null;
  time: string | null;
  children_uid: string | null;
  situation: string | null;
  create_time: string | null;
  user_id: string | null;
  childData: ChildData[]
}

export default function EntriesComponent({post, params}: {post: EntryData, params: {user: string}}) {

  const router = useRouter()
  
    const deleteEntries = async (post: any) => {  
      const { data, error } = await supabase
      .from('entries')
      .delete()
      .eq('id', `${post}`)
      
      router.replace(`${params.user}`);
    }
        


  return (
    <div>
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <div className='mt-[1px]'></div>
          <div className='flex items-center'>
            {post.childData.map((child: ChildData) => (
              <div key={child.id} className='bg-[#1E232F] w-[465px] max-w-[465px] min-w-[465px] py-[15px] px-[22px] rounded-xl'>
                <div className='flex flex-col justify-center'>
                  <div>
                      <div className="flex items-center justify-between">
                        {child.title && (
                          <p className="break-words w-[300px] max-w-[300px] min-w-[300px] //28Karakter">
                            {child.title}
                          </p>
                        )}
                        <ContentSituation type={child.situation}></ContentSituation>
                      </div>

                      <div>
                        {child.content !== null && (
                          <div className="mt-[10px]">
                            <p>{child.content}</p>
                          </div>
                        )}
                      </div>
                  </div>
                  <div className='absolute right-0'>
                    <EntriesDetail onClick={() => deleteEntries(child.id)} />
                  </div> 
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}
