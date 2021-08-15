import React from 'react'
import {ChevronRightIcon, HeartIcon} from '@heroicons/react/outline'


const HotelListItem = (props: any) => {
    // 宿泊日
    // const stayDate = props.searchInfo.stayYear + "年" + props.searchInfo.stayMonth + "月"+ props.searchInfo.stayDay + "日";
    // URL
    const url = `https://www.jalan.net/yad${props.hotelInfo.hotelNo}/plan/?screenId=UWW3101&yadNo=${props.hotelInfo.hotelNo}&reSearchFlg=1&roomCrack=200000&smlCd=272005&distCd=01&stayYear=${props.searchInfo.stayYear}&stayMonth=${props.searchInfo.stayMonth}&stayDay=${props.searchInfo.stayDay}&stayCount=${props.searchInfo.stayCount}&roomCount=1&adultNum=${props.searchInfo.personNum}&minPrice=0&maxPrice=999999`
    // クリックイベント
    return (
        <div className="flex items-center justify-between p-3 bg-white border border-gray-300 rounded-xl">
            <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <a href={url} rel="noopener noreferrer" target="_blank" className="font-bold truncate">{props.hotelInfo.hotelName}</a>
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer hover:bg-opacity-25 hover:bg-hotel-green">
                        <HeartIcon className="w-6 h-6 text-gray-400 "></HeartIcon>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-center w-16 h-16 text-lg font-bold bg-opacity-25 rounded-lg bg-hotel-green text-hotel-green-darker">20:00</div>
                    <div className="flex flex-col flex-1 ml-5 space-y-2">
                        <span className="text-sm font-bold text-gray-800">【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■</span>
                        <div className="hidden space-x-9 md:flex">
                            <span className="text-sm text-hotel-green-darker">チェックイン　15:00</span>
                            <span className="text-sm text-hotel-green-darker">チェックアウト　20:00</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-2">
                    <a href={url} rel="noopener noreferrer" target="_blank" className="flex items-center justify-between py-2 pl-2 space-x-2 rounded-lg hover:bg-gray-800 hover:bg-opacity-5">
                        <span className="flex-grow text-sm text-gray-700">スタンダードルーム 2名利用 【禁煙室】</span>
                        <span className="flex-shrink-0 text-sm font-bold text-hotel-green">¥ 4,600</span>
                        <ChevronRightIcon className="flex-shrink-0 w-6 h-6 text-hotel-green"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HotelListItem
