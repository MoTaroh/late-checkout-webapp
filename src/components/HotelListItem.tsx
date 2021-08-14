import React from 'react'
import {ChevronRightIcon, HeartIcon} from '@heroicons/react/outline'


const HotelListItem = (props: any) => {
    // 宿泊日
    const stayDate = props.searchInfo.stayYear + "年" + props.searchInfo.stayMonth + "月"+ props.searchInfo.stayDay + "日";
    // URL
    const url = `https://www.jalan.net/yad${props.hotelInfo.hotelNo}/plan/?screenId=UWW3101&yadNo=${props.hotelInfo.hotelNo}&reSearchFlg=1&roomCrack=200000&smlCd=272005&distCd=01&stayYear=${props.searchInfo.stayYear}&stayMonth=${props.searchInfo.stayMonth}&stayDay=${props.searchInfo.stayDay}&stayCount=${props.searchInfo.stayCount}&roomCount=1&adultNum=${props.searchInfo.personNum}&minPrice=0&maxPrice=999999`
    // クリックイベント
    return (
        <a href={url} rel="noopener noreferrer" target="_blank" className="flex items-center justify-between px-3 py-3 bg-white border border-gray-300 rounded-xl">
            <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold truncate">{props.hotelInfo.hotelName}</h3>
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                        <HeartIcon className="w-6 h-6 text-gray-400 "></HeartIcon>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center justify-center w-16 h-16 text-lg font-bold bg-opacity-25 rounded-lg bg-hotel-green text-hotel-green-darker">20:00</div>
                    <span className="flex-1 ml-5 text-sm font-bold text-gray-800">【室数限定36時間ステイ】8：00～翌20：00の36時間滞在可能！　■アパは映画もアニメも見放題■</span>
                </div>
                <div className="flex flex-col mt-2">
                    <div className="flex items-center justify-between py-2 pl-2 space-x-2 rounded-lg hover:bg-gray-800 hover:bg-opacity-5">
                        <span className="flex-grow text-sm text-gray-700">スタンダードルーム 2名利用 【禁煙室】</span>
                        <span className="flex-shrink-0 text-sm font-bold text-hotel-green">¥ 4,600</span>
                        <ChevronRightIcon className="flex-shrink-0 w-6 h-6 text-hotel-green"/>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default HotelListItem
