'use client'

import React, { useState, useEffect } from 'react';
import supabase from '@/utils/supabase/supabase-client';
import ContentTime from './ContentTime';
import ContentSituation from './ContentSituation';
import ChartData from '@/components/ChartData/ChartData';

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

export interface ChildData {
  id?: number | null;
  content?: string | null;
  title?: string | null;
  username?: string | null;
  children_uid?: string | null;
  create_time?: string | null;
}

export interface Header {
  id: string | null;
  create_at:  string | null;
  username:  string | null;
  first_name:  string | null;
  last_name:  string | null;
  description:  string | null;
}

export default function Entries({ params}: {params: { user: string }}) {
  const [data, setData] = useState<EntryData[]>([]);
  const [loading, setLoading] = useState(true)
  const [header, setHeader] = useState<Header[]>([])
  const param = params.user

  useEffect(() => {
    const fetchData = async () => {
      const { data: entriesData } = await supabase
        .from('entries')
        .select('*')
        .eq('username', `${param}`).order('time');

      if (entriesData) {
        const { data: childData } = await supabase.from('children_entries').select('*');
        const updatedData = entriesData.map((entry: any) => {
          const matchingChildData = childData?.filter((child: any) => child.children_uid === entry.children_uid);
          return {
            ...entry,
            childData: matchingChildData,
          };
        });
        setData(updatedData);
        setLoading(false)
      }
    };

    
    fetchData();
  }, [param]);

  return (
    <div>
      {loading && 
        <div className='w-full h-[350px] flex items-center justify-center'>
          Loading...
        </div>
      }

      {data.length > 0 && (
        <div className="flex flex-col relative mt-[20px]">
          {/* <ChartData></ChartData> */}
          {data.map((post: EntryData) => (
            <div className="flex justify-between break-words" key={post.id}>
              <div>
                <ContentTime time={post.time}></ContentTime>
              </div>

                <div>
                    <div className="flex flex-col">
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

                      {post.childData && (
                        <div className="flex flex-col gap-[20px] mb-[20px]">
                          <div className='mt-[1px]'></div>
                             {post.childData.map((child: ChildData) => (
                              <div key={child.id} className='bg-[#1E232F] w-[465px] max-w-[465px] min-w-[465px] py-[15px] px-[22px] rounded-xl'>
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
                            ))}
                        </div>
                      )}
                    </div>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}