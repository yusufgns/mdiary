import React from "react";
import Image from "next/image";
import Link from "next/link";


interface AvatarProps {
  image: string;
  name: string | null;
  userData: any
}

export default function Avatar({ image, name, userData }: AvatarProps) {
    const userName = 'd/' + userData[0].username

    return (
        <div>
            {image !== '' && 
                <Link href={userName} className="fixed right-10 bottom-10 bg-gray-800 py-[6px] px-[15px] rounded-xl items-center justify-center">
                    <div className="flex items-center gap-[10px]">
                        <Image
                            src={image}
                            alt=''
                            className="rounded-full object-cover object-center"
                            quality={30}
                            width={35}
                            height={35}
                        />
                        <div>{name}</div>
                    </div>
                </Link>
            }

            {image == '' && 
                <Link href='/auth' className="fixed right-10 bottom-10 bg-gray-800 py-[6px] px-[15px] rounded-xl items-center justify-center h-[38px]">
                    <div className="flex items-center gap-[10px]">
                        <p>Şimdi Oluştur</p>
                    </div>
                </Link>
            }
        </div>
    );
}