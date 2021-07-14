import React from 'react'
import HotelListItem from '../components/HotelListItem'

const hotelList = [
    {
        "hotelName": "ホテルマイステイズ御堂筋本町",
        "hotelNo": "314648"
    },
    {
        "hotelName": "ホテルマイステイズ堺筋本町",
        "hotelNo": "314648"
    },
    {
        "hotelName": "アパホテル　淀屋橋　北浜駅前",
        "hotelNo": "314648"
    },
    {
        "hotelName": "ホテルグレイスリー大阪なんば",
        "hotelNo": "314648"
    },
    {
        "hotelName": "ホテルヒラリーズ心斎橋",
        "hotelNo": "314648"
    },
]

const searchInfo = {
    "date": "10月16日",   // TODO: datetimeを使用
    "prefecture": "大阪府",
    "personNum": 2
}

const HotelListPage = () => {
    return (
        <div className="container flex flex-col bg-gray-100">
            <h2 className="mt-5 mb-6 text-lg font-bold text-gray-800">ホテル一覧</h2>
            <div className="flex flex-col mb-6 space-y-3">
                {
                    hotelList.map(hotelInfo => (
                        <HotelListItem key={hotelInfo.hotelName} hotelInfo={hotelInfo} searchInfo={searchInfo}></HotelListItem>
                    ))
                }
            </div>
        </div>
    )
}

export default HotelListPage
