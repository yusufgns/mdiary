'use client'

import ContentComponent from "./ContentComponent"
import ContentTime from "./ContentTime"
import {useState, useCallback, useEffect} from 'react'
import { PostType } from "@/types/collection"
import supabase from '@/utils/supabase/supabase-client'
import { data } from "autoprefixer"

export default function ContentDiary() {
    const [datas, setDatas] = useState<PostType[]>([])
    const [load, setLoad] = useState('true')
    const fetchPosts = useCallback(async () => {
        setLoad('true')
        const { data, error } = await supabase.from('posts').select('*').order('time', );
        if (error) {
        console.error(error);
        } else {
        setDatas(data);
        }
        setLoad('false')
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    return (
        <div className="
            w-[576px]
            max-w-[576px]
            relative
            px-[8px]
            ">
            {load === 'true' && 'Yükleniyor'}
            <ContentComponent posts={datas}></ContentComponent>
        </div>
    )
}