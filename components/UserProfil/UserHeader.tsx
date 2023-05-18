'use client'
import Image from "next/image"
import supabase from '@/utils/supabase/supabase-client'
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

interface UserHeader {
    params: string,
    getUser: any,
    name: string,
    image: string
}

interface dataI {
    last_name: string,
    first_name: string,
    username: string,
    description: string
}

export default function UserHeader({params, name, image}: UserHeader ) {
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)
    const param: string = params.user

    async function fecth() {
        const {data: headerData, error} = await supabase.from('user').select('*')
        const userData: any = headerData?.find((e: any) => e.username == `${param}`)
        setData(userData)
        setLoading(false)
    }

    useEffect(() => {
        fecth()
    })
    
    if(data == null) {
        redirect('/')
    }

    return (
        <>
            {data !== null && <div className='
                flex 
                flex-col 
                gap-[20px]
                max-h-[350px]
                '>
            <div className='
                flex
                items-center
                mx-[8px]
                mt-[25px]
            '>
                <div className='mr-[25px] rounded-full'>
                    <Image className='rounded-full'
                    src={image}
                    alt={name}
                    width={96}
                    height={96}/>
                </div>
                <div className='
                    flex 
                    flex-col
                    gap-[0.10rem]
                '>
                    <h1 className='
                        font-bold
                    '>{data.first_name} {data.last_name}</h1>

                    <h3>@{data.username}</h3>
                    <div>Social Link List</div>
                </div>
            </div>
            <div>
                <p className='
                    dark:text-[#8D8D8D]
                    break-words
                    text-ellipsis
                    max-w-[550px]
                    mx-[8px]
                '>{data.description}</p>
            </div>
            <hr className='dark:opacity-50'/>
        </div>}
        </>
    )
}