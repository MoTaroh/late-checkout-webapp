import {HeartIcon} from '@heroicons/react/outline'
import PlanItem from './PlanItem'

type Props = {
    hotel: any,
    searchInfo: any
}
type Plan = {
    planNo: string,
}

const HotelListItem = (props: Props) => {
    // 宿泊日
    // const stayDate = props.searchInfo.stayYear + "年" + props.searchInfo.stayMonth + "月"+ props.searchInfo.stayDay + "日";
    // URL
    const url = `https://www.jalan.net/yad${props.hotel.hotelNo}/plan/?screenId=UWW3101&yadNo=${props.hotel.hotelNo}&reSearchFlg=1&roomCrack=200000&smlCd=272005&distCd=01&stayYear=${props.searchInfo.stayYear}&stayMonth=${props.searchInfo.stayMonth}&stayDay=${props.searchInfo.stayDay}&stayCount=${props.searchInfo.stayCount}&roomCount=1&adultNum=${props.searchInfo.personNum}&minPrice=0&maxPrice=999999`
    // クリックイベント
    return (
        <div className="flex items-center justify-between p-3 bg-white border border-gray-300 rounded-xl">
            <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <a href={url} rel="noopener noreferrer" target="_blank" className="font-bold truncate">{props.hotel.hotelName}</a>
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer hover:bg-opacity-25 hover:bg-hotel-green">
                        <HeartIcon className="w-6 h-6 text-gray-400 "></HeartIcon>
                    </div>
                </div>
                <div>
                    {
                        props.hotel.planList.map((plan: Plan) => (
                            <PlanItem key={plan.planNo} plan={plan}></PlanItem>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HotelListItem
