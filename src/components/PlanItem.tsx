import React from 'react'
import RoomItem from './RoomItem'

type Props = {
    plan: any
}
type Room = {
    roomNo: string
}

const PlanItem = (props: Props) => {
    return (
        <div>
            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center justify-center w-16 h-16 text-lg font-bold bg-opacity-25 rounded-lg bg-hotel-green text-hotel-green-darker">{props.plan.checkOutTime}</div>
                <div className="flex flex-col flex-1 ml-5 space-y-2">
                    <span className="text-sm font-bold text-gray-800">{props.plan.planName}</span>
                    <div className="hidden space-x-9 md:flex">
                        <span className="text-sm text-hotel-green-darker">チェックイン　{props.plan.checkInTime}</span>
                        <span className="text-sm text-hotel-green-darker">チェックアウト　{props.plan.checkOutTime}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-2 space-y-1">
                {
                    props.plan.roomList.map((room: Room) => (
                        <RoomItem key={room.roomNo} url="" room={room}></RoomItem>
                    ))
                }
            </div>
        </div>
    )
}

export default PlanItem
