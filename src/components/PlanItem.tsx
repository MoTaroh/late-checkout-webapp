import React from "react";
import { Plan, Room } from "../types/types";
import RoomItem from "./RoomItem";

type Props = {
  plan: Plan;
};

const PlanItem: React.VFC<Props> = ({ plan }) => {
  return (
    <div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center justify-center w-16 h-16 text-lg font-bold bg-opacity-25 rounded-lg bg-hotel-green text-hotel-green-darker">
          {plan.checkOutTime}
        </div>
        <div className="flex flex-col flex-1 ml-5 space-y-2">
          <span className="text-sm font-bold text-gray-800">
            {plan.planName}
          </span>
          <div className="hidden space-x-9 md:flex">
            <span className="text-sm text-hotel-green-darker">
              チェックイン　{plan.checkInTime}
            </span>
            <span className="text-sm text-hotel-green-darker">
              チェックアウト　{plan.checkOutTime}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2 space-y-1">
        {plan.roomList.map((room: Room) => (
          <RoomItem key={room.roomURL} room={room}></RoomItem>
        ))}
      </div>
    </div>
  );
};

export default PlanItem;
