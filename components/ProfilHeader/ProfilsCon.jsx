import Profils from '../../uı/Profils/profils'
import Image from 'next/image'
export default function ProfilsCon() {
    return (
        <div className='
        flex 
        flex-col 
        gap-[20px]
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
                    alt='Logo'
                    width={96}
                    height={96}/>
                </div>
                <div className='
                flex 
                flex-col
                gap-[0.25rem]
                '>
                    <h1 className='
                        font-bold
                    '>Yusuf Güneş</h1>
                    <p className='
                        opacity-75
                    '>İstanbul</p>
                    <p className='
                        opacity-75
                    '>############ 364</p>
                </div>
            </div>
            <div>
                <p className='
                    opacity-75
                    break-words
                    text-ellipsis
                    max-w-[550px]
                    mx-[8px]
                '>Bio TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</p>
            </div>
            <hr className='opacity-75'/>
        </div>
    )
}