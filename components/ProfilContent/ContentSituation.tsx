import React from "react"
import clsx from 'clsx'

interface Situation {
    type: string
}


const Situation: React.FC<Situation> = ({
    type
}) => {
    return (
        <button className={clsx(`
            text-[10px] text-center my-auto py-[2px] px-[10px] rounded-xl
        `,
            type === 'completing' && 'bg-[rgb(57,109,63)]',
            type === 'overdue' && 'bg-[#9B6B70]',
        )}
        
        disabled>
            {type === 'completing' && 'Completing'}
            {type === 'overdue' && 'Over Due'}
        </button>
    )
}

export default Situation