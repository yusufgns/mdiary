import React, { useEffect } from 'react'
import EntriesDetail from './EntriesDetail'
import EntriesChild from './EntriesChild'
import ContentTime from '../ContentTime'
import ContentSituation from '../ContentSituation'
import EntriesComponent, {ChildData, EntryData} from './EntriesChild';
import supabase from '@/utils/supabase/supabase-client';
import { useRouter } from 'next/navigation';

export default function EntriesMain({data, params}: {data : any, params: {user : string}}) {
  const router = useRouter()

  const dene: any = params.user 
    
    const deleteEntries = async (post: any) => {  
      const { data, error } = await supabase
      .from('entries')
      .delete()
      .eq('id', `${post}`)
      
      router.replace(`${params.user}`);
    }

  return (
    <div className="flex flex-col relative mt-[20px]">
          {data.map((post: EntryData) => (
            <div className="flex justify-between break-words" key={post.id}>
              <div>
                <ContentTime time={post.time}></ContentTime>
              </div>

              <div>
                  <div className="flex flex-col">
                    <div className='flex items-center'>
                      <div className='flex justify-center items-center'>
                        <div className='bg-[#1E232F] w-[465px] max-w-[465px] min-w-[465px] py-[15px] px-[22px] rounded-xl'>
                        <div className="flex items-center justify-between">
                        {post.title && (
                          <p className="break-words w-[300px] max-w-[300px] min-w-[300px] //28Karakter">
                            {post.title}
                          </p>
                        )}
                        <ContentSituation type={post.situation}></ContentSituation>
                        </div>

                        <div>
                          {post.content !== null && (
                          <div className="mt-[10px]">
                            <p>{post.content}</p>
                          </div>
                          )}
                        </div>
                      </div>
                      <div className='absolute right-0'>
                        <EntriesDetail onClick={() => deleteEntries(post.id)} />
                      </div>
                      </div>
                    </div>

                    {post.childData && (
                      <EntriesChild post={post} params={params}></EntriesChild>
                    )}
                  </div>
              </div>
            </div>
          ))}
        </div>
  )
}
