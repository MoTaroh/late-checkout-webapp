import { HeartIcon } from "@heroicons/react/outline";
import { Hotel, Plan } from "../types/types";
import PlanItem from "./PlanItem";

type Props = {
  hotel: Hotel;
};

const HotelListItem: React.VFC<Props> = ({ hotel }) => {
  // 宿泊日
  // const stayDate = props.searchInfo.stayYear + "年" + props.searchInfo.stayMonth + "月"+ props.searchInfo.stayDay + "日";
  // URL
  // const url = `https://www.jalan.net/yad${hotel.hotelNo}/plan/?screenId=UWW3101&yadNo=${hotel.hotelNo}&reSearchFlg=1&roomCrack=200000&smlCd=272005&distCd=01&stayYear=${searchInfo.stayYear}&stayMonth=${searchInfo.stayMonth}&stayDay=${searchInfo.stayDay}&stayCount=${searchInfo.stayCount}&roomCount=1&adultNum=${searchInfo.personNum}&minPrice=0&maxPrice=999999`
  // クリックイベント
  return (
    <div className="flex items-center justify-between p-3 bg-white border border-gray-300 rounded-xl">
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <a
            href=""
            rel="noopener noreferrer"
            target="_blank"
            className="font-bold truncate"
          >
            {hotel.hotelName}
          </a>
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
