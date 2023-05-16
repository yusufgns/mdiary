'use client'

import { useEffect, useState } from 'react'
import './Create.css'
import supabase from "@/utils/supabase/supabase-client"

export default function CreateComponent({data}: {data: any}) {
    const [time, setTime] = useState('')
    const [childUID, setChildUID] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [situation, setSituation] = useState('')
    const [postData, setPostData] = useState('')

    if(time !== '') {
        const filterTıme = data.filter((post: any) => post.time == `${time}`);
        if(filterTıme.length > 0) {
             const getData = data.find((post: any) => post.time == `${time}`)
             const getChild = getData.children_uid
             setChildUID(getChild)
         }
    }

    const sendData = async () => {
        if(childUID) {
            const { data, error } = await supabase
            .from('create_children')
            .insert([
                {
                    children_uid: `${childUID}`,
                    title: `${title}`,
                    situation: `${situation}`,
                },
            ])
        } else {
            const { data, error } = await supabase
            .from('entries')
            .insert([
                {
                    time: `${time}`,
                    title: `${title}`,
                    situation: `${situation}`,
                    username: '',
                    content: `${content}`,
                },
            ])
        }
    }


    // const { data: postChildData, error } = await supabase
    //                 .from('create_children')
    //                 .insert([
    //                     {
    //                         children_uid: `${getChildren}`,
    //                         title: `${title}`,
    //                         situation: `${situation}`,
    //                     },
    //             ])

    // console.log(time)
    // console.log(title)
    // console.log(child)
    // console.log(situation)
    // console.log(content)

    

   

    return (
        <div 
            className="
                w-[576px] 
                max-w-[576px]
                bg-[#1E232F]
                mb-[10px]
                px-[10px]
                rounded-xl
            ">
            <div 
                className="
                    flex
                    break-words
                    justify-center
                ">
                    <input 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        type="time"
                        className="
                            time
                        ">
                    </input>

                    <div className="
                        flex
                        flex-col
                        bg-[#1E232F]
                        w-[465px]
                        max-w-[465px]
                        min-w-[465px]
                        py-[15px]
                        pl-[15px]
                        rounded-xl

                    ">
                        <div className="
                            flex
                            items-center
                            justify-between
                            mb-[10px]
                        ">
                            <input
                                type="text"
                                maxLength={27}
                                className="
                                    h-[35px]
                                    rounded-md
                                    w-[340px]
                                    max-w-[312px]
                                    min-w-[312px]
                                    outline-none
                                    p-[10px]
                                "    
                            />
                            <select
                                className="selected">
                                    <option value="0">Selected</option>
                                    <option value="1">completing</option>
                                    <option value="2">overdue</option>
                            </select>
                        </div>
                        <textarea
                        //280 karakter
                            className="textarea" maxLength={280}/>
                    </div>
            </div>

            <div 
                className="
                    w-full
                    right-0
                    flex
                    items-center
                    justify-center
                    mb-[10px]
                ">
                    <button
                        onClick={() => sendData}
                        className="
                            bg-gray-600
                            py-[5px]
                            px-[15px]
                            rounded-lg
                        ">
                    SEND
                    </button>
            </div>
        </div>
    )
}