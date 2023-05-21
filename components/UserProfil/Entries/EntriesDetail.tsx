'use client'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function EntriesDetail({onClick}: {onClick: any}) {
  return (
    <button onClick={onClick}>
      <div>
          <BsThreeDotsVertical />
      </div>
    </button>
  )
}
