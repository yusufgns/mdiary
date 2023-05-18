import Image from "next/image"
import {createClient} from '@/utils/supabase/supabase-server'
import { Database } from "@/types/supabase"
import { SupabaseClient } from "@supabase/supabase-js"
import { redirect } from "next/navigation"

interface UserHeader {
    params: string,
    getUser: any,
    name: string,
    image: string
}

export default async function UserHeader({params, name, image, getUser}: UserHeader ) {

    const supabase:SupabaseClient<Database> = createClient()
    const param: string = params.user

    const {data: headerData, error} = await supabase.from('user').select('*')
    const userData: any = headerData?.find((e: any) => e.username == `${param}`)
    
    if(userData == null) {
        redirect('/')
    }

    return (
        <>
            {userData !== null && <div className='
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
                    src="/IMG.jpg"
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
                    '>{userData.first_name} {userData.last_name}</h1>

                    <h3>@{userData.username}</h3>
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
                '>{userData.description}</p>
            </div>
            <hr className='dark:opacity-50'/>
        </div>}
        </>
    )
}