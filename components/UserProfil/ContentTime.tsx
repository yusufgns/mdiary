'use client'

export default function ContentTime({time}: {time: any}) {

    const timeParts = time.split(':');
    const hour = parseInt(timeParts[0], 10);
    const minute = parseInt(timeParts[1], 10);

    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    const formattedTime = `${formattedHour}:${formattedMinute}`;

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
                {formattedTime}
            </div>
        </>
    )
}