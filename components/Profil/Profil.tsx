'use client'

import supabase from "@/utils/supabase/supabase-client"
import { useCallback, useEffect, useState } from "react"
import {PostType} from '@/types/collection'
import Post from "./Post"

export default function Home() {
    const [posts, setPosts] = useState<PostType[]>([])
    const fetcher = useCallback(async () => {
        const {data, error} = await supabase.from('posts').select('*');

        if(error) {
            console.log('error', error)
        } else {
            setPosts(data)
        }
    }, [])

    useEffect(() => {
        fetcher()
    }, [fetcher])
    return <main>{posts.map((post) =>( <Post key={post.id} post={post}/>))}</main>
}