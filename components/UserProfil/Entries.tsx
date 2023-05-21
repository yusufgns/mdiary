'use client'

import React, { useState, useEffect } from 'react';
import supabase from '@/utils/supabase/supabase-client';
import { EntryData} from './Entries/EntriesChild';
import EntriesMain from './Entries/EntriesMain';

export interface Header {
  id: string | null;
  create_at:  string | null;
  username:  string | null;
  first_name:  string | null;
  last_name:  string | null;
  description:  string | null;
  situation: string | null;
}

export default function Entries({ params }: {params: { user: string }}) {
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
        <EntriesMain data={data} params={params} />
      )}
    </div>
  );
}