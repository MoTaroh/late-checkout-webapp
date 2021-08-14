import React from 'react'
import { useLocation } from 'react-router-dom'
import NavBar2 from '../components/NavBar2'
import Footer from '../components/Footer'
import HotelListItem from '../components/HotelListItem'
import SelectList from '../components/SelectList'

const hotelList = [
    {"hotelName": "アインズ・イン梅田東","hotelNo": "345754"},
    {"hotelName": "アパホテル〈御堂筋本町駅前〉","hotelNo": "386787"},
    {"hotelName": "アパホテル〈御堂筋本町駅東〉（全室禁煙）","hotelNo": "386585"},
    {"hotelName": "アパホテル〈大阪肥後橋駅前〉（全室禁煙）","hotelNo": "346744"},
    {"hotelName": "アパホテル〈東梅田 南森町駅前〉","hotelNo": "323812"},
    {"hotelName": "アパホテル〈淀屋橋 北浜駅前〉","hotelNo": "369184"},
    {"hotelName": "アパホテル＆リゾート〈御堂筋本町駅タワー〉（全室禁煙）","hotelNo": "376554"},
    {"hotelName": "イビス大阪梅田","hotelNo": "339535"},
    {"hotelName": "スーパーホテルPremier大阪・本町　天然温泉　四季彩の湯","hotelNo": "308796"},
    {"hotelName": "スーパーホテル梅田・肥後橋","hotelNo": "328798"},
    {"hotelName": "プレミアホテル－CABIN－大阪","hotelNo": "328778"},
    {"hotelName": "ホテルＷＢＦ本町","hotelNo": "377707"},
    {"hotelName": "ホテルマイステイズプレミア堂島","hotelNo": "334326"},
    {"hotelName": "ホテルマイステイズ御堂筋本町","hotelNo": "314648"},
    {"hotelName": "ホテルマイステイズ堺筋本町","hotelNo": "304638"},
    {"hotelName": "東急ステイ大阪本町（2020年2月27日グランドオープン）","hotelNo": "307894"},
    {"hotelName": "ホテルグレイスリー大阪なんば","hotelNo": "330578"},
    {"hotelName": "ホテルヒラリーズ心斎橋","hotelNo": "363847"},
]

const hotelDB = {
    "result": [
        {
            "hotelNo": "345754",
            "hotelName": "アインズ・イン梅田東",
            "prefNo": "270000",
            "prefName": "大阪府",
            "regNo": "272000",
            "regName": "大阪駅・梅田駅・福島・淀屋橋・本町",
            "planList": [
                {
                    "planNo": "",
                    "planName": "",
                    "roomList": [
                        {
                            "roomNo": "",
                            "roomName": "",
                            "roomPrice": 4000
                        }
                    ]
                }
            ]
        },
        {
            "hotelNo": "363847",
            "hotelName": "ホテルグレイスリー大阪なんば",
            "prefNo": "270000",
            "prefName": "大阪府",
            "regNo": "272900",
            "regName": "心斎橋・なんば・四ツ橋",
            "planList": [
                {
                    "planNo": "",
                    "planName": "",
                    "roomList": [
                        {
                            "roomNo": "",
                            "roomName": "",
                            "roomPrice": 4000
                        }
                    ]
                }
            ]
        }
    ]
};

const regions = ["大阪駅・梅田駅・福島・淀屋橋・本町", "心斎橋・なんば・四ツ橋"]

const HotelListPage = () => {
    // 検索結果を受け取る
    const location = useLocation();
    const searchInfo = location.state
    console.log(searchInfo);

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container flex flex-col">
                <NavBar2></NavBar2>
                <div className="flex flex-col flex-1 mt-5">
                    <div className="flex items-start justify-between">
                        <h2 className="text-lg font-bold text-gray-800 ">ホテル一覧</h2>
                        <SelectList regions={regions}></SelectList>
                    </div>
                    <div className="flex items-center justify-between mt-3 space-x-9">
                        <div className="text-sm text-gray-800 lg:text-base lg:font-bold">{hotelDB.result[0].regName}</div>
                        <div className="flex-1 h-px bg-hotel-green"></div>
                    </div>
                    <div className="mt-3">
                        <div className="grid grid-cols-1 gap-3 mb-6 md:grid-cols-2 lg:grid-cols-3">
                            {
                                hotelList.map(hotelInfo => (
                                    <HotelListItem key={hotelInfo.hotelName} hotelInfo={hotelInfo} searchInfo={searchInfo}></HotelListItem>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default HotelListPage
