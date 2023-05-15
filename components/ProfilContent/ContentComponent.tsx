'use client'
import { PostType } from "@/types/collection"
import ContentSituation from './ContentSituation'
import ContentTime from './ContentTime'
import InTimeCreateTodo from "./InTİmeCreateTodo"
import CreateContent from "../CreateContent/CreateContent"
import { useCallback, useEffect, useState } from "react"

export default function ContentComponent({posts}: {posts : any}) {;
    const [data, setData] = useState(posts)
    //bg-[#1E232F]

    useEffect(() => {
        setData(posts.filter((post: any) => post.username === 'Yusuf'))
    }, [posts])

    

    const deneme = async () => {
        try {
            const filteredPosts = data.filter((post: any) => post.time === '10:00:00');
            console.log(filteredPosts)
            
        } catch (error) {
            console.log('ERROR', error)
        }
    }

    return (
        <>
            <div className="
                flex 
                gap-[15px] 
                flex-col 
                mt-[15px] 
                relative
            ">
                <div className="
                    fixed bottom-0 
                    items-center
                    w-[576px] 
                    max-w-[576px]
                    flex
                    justify-center
                ">
                    <CreateContent onClick={() => deneme()}></CreateContent>
                </div>
                    {/* <ContentTime time={time}></ContentTime> */}

                {data.map((post: any) => (
                    <div 
                    className="
                        flex justify-between break-words
                    "
                    key={post.id}>
                        <div>
                            <ContentTime time={post.time}></ContentTime>
                            <InTimeCreateTodo></InTimeCreateTodo>
                        </div>

                        <div className="
                            flex
                            flex-col
                            bg-[#1E232F]
                            w-[465px]
                            max-w-[465px]
                            min-w-[465px]
                            py-[15px]
                            px-[22px]
                            rounded-xl
                        ">
                            <div className="
                                flex
                                items-center
                                justify-between
                            ">
                                <p className="break-words w-[300px] max-w-[300px] min-w-[300px] //28Karakter">{post.title}</p>
                                <ContentSituation type={post.type}></ContentSituation>
                            </div>
                            <div className="mt-[10px]">
                                <p>{post.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}