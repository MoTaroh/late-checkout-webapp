import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Room } from "../types/types";

type Props = {
  room: Room;
};

const RoomItem: React.VFC<Props> = ({ room }) => {
  return (
    <a
      href={room.roomURL}
      rel="noopener noreferrer"
      target="_blank"
      className="flex items-center justify-between py-2 pl-2 space-x-2 rounded-lg hover:bg-slate-800 hover:bg-opacity-5"
    >
      <span className="flex-grow text-sm text-slate-700">{room.roomName}</span>
      <span className="flex-shrink-0 text-sm font-bold text-hotel-green">
        {room.roomPrice}
      </span>
      <ChevronRightIcon className="flex-shrink-0 w-6 h-6 text-hotel-green" />
    </a>
  );
};

export default RoomItem;
