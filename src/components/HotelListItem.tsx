import React from 'react'
import {ChevronRightIcon} from '@heroicons/react/outline'


// TODO: 親でホテルリストをmapして読み込むので、ホテル情報を受け取る
// TODO: 検索情報（日付と都道府県と人数）を受け取る
// TODO: 受け取った情報をもとにURLを生成する
// TODO: 要素全体にクリックイベントを設定し、URLを別タブで開く



const HotelListItem = (props: any) => {
    const url = `https://www.jalan.net/yad${props.hotelInfo.hotelNo}/plan/?screenId=UWW3101&yadNo=${props.hotelInfo.hotelNo}&reSearchFlg=1&roomCrack=200000&smlCd=272005&distCd=01&stayYear=2021&stayMonth=8&stayDay=12&stayCount=1&roomCount=1&adultNum=${props.searchInfo.personNum}&minPrice=0&maxPrice=999999`
    // クリックイベント
    return (
        <a href={url} rel="noopener noreferrer" target="_blank" className="flex items-center justify-between px-6 py-4 bg-white border border-gray-300 rounded-xl">
            <div className="flex flex-col">
                <h3 className="text-sm font-bold">{props.hotelInfo.hotelName}</h3>
                <span className="mt-3 text-sm font-bold text-hotel-green">{props.searchInfo.date}のプラン一覧</span>
            </div>
            <ChevronRightIcon className="w-6 h-6 text-hotel-green"></ChevronRightIcon>
        </a>
    )
}

export default HotelListItem
