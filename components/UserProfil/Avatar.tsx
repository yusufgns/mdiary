import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Avatar {
    image: string,
    name: string
}

export default function Avatar({image, name}: Avatar) {
    return (
        <div className="fixed right-10 bottom-10 bg-gray-800 py-[6px] px-[15px] rounded-xl">
            <Link href=''>
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
        </div>
    );
}