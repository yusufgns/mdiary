import Image from 'next/image'

export default function Profils() {
    return (
        <div>
            <div className='
                flex
                items-center
            '>
                <div className='mr-[50px]'>
                    <Image src="/sun.svg" alt='Logo' width={96} height={96} />
                </div>
                <div className='pl-[30px]'>
                    <h1>Yusuf Güneş</h1>
                    <p>İstanbul</p>
                    <p>8 / 10 Days</p>
                </div>
            </div>
            <div>
                <p>Bio</p>
            </div>
            <hr />
        </div>
    )
}