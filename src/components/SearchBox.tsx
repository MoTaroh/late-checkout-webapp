import React, { useState }  from 'react'
import { useHistory } from 'react-router-dom' 
import {CalendarIcon, LocationMarkerIcon, UserIcon, SearchIcon} from '@heroicons/react/outline'
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ja from 'date-fns/locale/ja'
import SearchLabel from './SearchLabel'
registerLocale('ja', ja)

const SearchBox = () => {
    // プラン検索したら画面遷移
    const history = useHistory();
    const handleLink = (path: any) => {
        const searchInfo = {
            "stayYear" : stayDate.getFullYear(),
            "stayMonth" : stayDate.getMonth() + 1,
            "stayDay" : stayDate.getDate(),
            "dayofweek" : stayDate.getDay(),
            "stayCount" : stayCount,
            "prefecture": "大阪府",
            "personNum": personNum
        }
        history.push(path, searchInfo);
    }

    // datepicker
    const initialDate = new Date()
    const [stayDate, setStayDate] = useState(initialDate)
    const handleStayDate = (date: Date) => {
        setStayDate(date)
    }
    // 宿泊日数選択
    const [stayCount, setStayCount] = useState(1)
    const handleStayCount = (event: any) => {
        setStayCount(event.target.value);
    }
    // 宿泊人数（大人のみ）
    const [personNum, setPersonNum] = useState(2)
    const handlePersonNum = (event: any) => {
        setPersonNum(event.target.value)
    }
    return (
        <div className="flex flex-col px-4 pb-4 bg-white shadow-xl lg:pt-4 lg:flex-row rounded-2xl">
            <div className="flex flex-col text-gray-500 divide-y divide-gray-200 lg:mr-4 lg:divide-x lg:flex-1 lg:divide-y-0 lg:py-0 lg:flex-row">
                <div className="flex flex-col lg:w-1/2 lg:ml-4">
                    <SearchLabel text="宿泊希望日"></SearchLabel>
                    <div className="flex items-center px-4 py-2 divide-x lg:divide-x-0 lg:mt-3 lg:px-0 lg:py-0">
                        <div className="flex items-center flex-1 lg:w-3/4">
                            <CalendarIcon className="w-6 h-6 text-hotel-green"></CalendarIcon>
                            <DatePicker
                                locale="ja"
                                dateFormat="yyyy年MM月dd日"
                                selected={stayDate}
                                onChange={handleStayDate}
                                className="w-full px-2 py-2 pl-4 text-lg font-medium bg-white lg:font-bold">
                            </DatePicker>
                        </div>
                        <div className="flex items-center lg:w-1/4">
                            <select
                                name="stayCount"
                                id="stayCount"
                                value={stayCount}
                                onChange={handleStayCount}
                                className="px-4 py-2 text-lg font-medium bg-white appearance-none lg:font-bold"
                            >
                                <option value="1">1泊</option>
                                <option value="2">2泊</option>
                                <option value="3">3泊</option>
                                <option value="4">4泊</option>
                                <option value="5">5泊</option>
                                <option value="6">6泊</option>
                                <option value="7">7泊</option>
                                <option value="8">8泊</option>
                                <option value="9">9泊</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between py-2 divide-x lg:py-0 lg:w-1/2">
                    <div className="flex flex-col lg:w-1/2 lg:ml-4">
                        <SearchLabel text="都道府県"></SearchLabel>
                        <div className="flex items-center flex-1 px-4 lg:mt-3 lg:px-0">
                            <LocationMarkerIcon className="w-6 h-6 text-hotel-green"></LocationMarkerIcon>
                            <select className="flex-1 px-4 py-2 text-lg font-medium bg-white appearance-none lg:font-bold" >
                                <option value="大阪">大阪府</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-1/2 lg:pl-4">
                        <SearchLabel text="宿泊人数"></SearchLabel>
                        <div className="flex items-center px-4 lg:px-0 lg:mt-3">
                            <UserIcon className="w-6 h-6 text-hotel-green"></UserIcon>
                            <select
                                id="person_num"
                                name="person_num"
                                value={personNum}
                                onChange={handlePersonNum}
                                className="flex-1 px-4 py-2 text-lg font-medium bg-white appearance-none lg:font-bold"
                            >
                                <option value="1">1名</option>
                                <option value="2">2名</option>
                                <option value="3">3名</option>
                                <option value="4">4名</option>
                                <option value="5">5名</option>
                                <option value="6">6名</option>
                                <option value="7">7名</option>
                                <option value="8">8名</option>
                                <option value="9">9名</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => handleLink('/hotels')} className="flex items-center justify-center px-4 py-4 text-lg font-bold text-white lg:px-6 bg-hotel-green rounded-2xl">
                <SearchIcon className="w-6 h-6 text-white"></SearchIcon>
                <span className="ml-6">プランを検索</span>
            </button>
        </div>
    )
}

export default SearchBox
