import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'

type Props = {
    room: any,
    url: string
}

const RoomItem = (props: Props) => {
    return (
        <a href={props.url} rel="noopener noreferrer" target="_blank" className="flex items-center justify-between py-2 pl-2 space-x-2 rounded-lg hover:bg-gray-800 hover:bg-opacity-5">
            <span className="flex-grow text-sm text-gray-700">{props.room.roomName}</span>
            <span className="flex-shrink-0 text-sm font-bold text-hotel-green">¥ {props.room.roomPrice}</span>
            <ChevronRightIcon className="flex-shrink-0 w-6 h-6 text-hotel-green"/>
        </a>
    )
}

export default RoomItem
