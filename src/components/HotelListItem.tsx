import { HeartIcon } from "@heroicons/react/outline";
import { Hotel, Plan } from "../types/types";
import PlanItem from "./PlanItem";

type Props = {
  hotel: Hotel;
};

const HotelListItem: React.VFC<Props> = ({ hotel }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white border border-gray-300 rounded-xl">
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div className="flex-1 font-bold break-all">{hotel.hotelName}</div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer hover:bg-opacity-25 hover:bg-hotel-green">
            <HeartIcon className="w-6 h-6 text-gray-400 "></HeartIcon>
          </div>
        </div>
        <div>
          {hotel.planList.map((plan: Plan) => (
            <PlanItem key={plan.planName} plan={plan}></PlanItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelListItem;
