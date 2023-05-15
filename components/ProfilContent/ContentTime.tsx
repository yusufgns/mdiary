'use client'

export default function ContentTime({time}: {time: any}) {

    return (
        <>
            <div className="
                py-[7px] 
                w-[80px] 
                text-center
                font-bold 
                bg-blue-400
                rounded-lg
                mb-[12px]
            ">
                {time}
            </div>
        </>
    )
}