import React, { useState }  from 'react'
import { useHistory } from 'react-router-dom' 
import {CalendarIcon, LocationMarkerIcon, UserIcon, SearchIcon} from '@heroicons/react/outline'
import DatePicker, { registerLocale } from "react-datepicker"
import ja from 'date-fns/locale/ja'
import SearchLabel from './SearchLabel'
import StayDateInput from './SearchBox/StayDateInput'
import StayPrefectureInput from './SearchBox/StayPrefectureInput'
import StayPersonNumInput from './SearchBox/StayPersonNumInput'
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
        <div className="flex flex-col w-full max-w-sm px-4 pb-4 bg-white shadow-xl lg:pt-4 lg:max-w-none lg:flex-row rounded-2xl">
            <div className="flex flex-col text-gray-500 divide-y divide-gray-200 lg:mr-4 lg:divide-x lg:flex-1 lg:divide-y-0 lg:py-0 lg:flex-row">
                <div className="flex flex-col lg:w-1/2 lg:ml-4">
                    <SearchLabel text="宿泊希望日"></SearchLabel>
                    <StayDateInput></StayDateInput>
                </div>
                <div className="flex items-center justify-between py-2 divide-x lg:py-0 lg:w-1/2">
                    <div className="flex flex-col lg:w-1/2 lg:ml-4">
                        <SearchLabel text="都道府県"></SearchLabel>
                        <StayPrefectureInput></StayPrefectureInput>
                    </div>
                    <div className="flex flex-col lg:w-1/2 lg:pl-4">
                        <SearchLabel text="宿泊人数"></SearchLabel>
                        <StayPersonNumInput></StayPersonNumInput>
                    </div>
                </div>
            </div>
            <button onClick={() => handleLink('/hotels')} className="flex items-center justify-center px-4 py-4 text-lg font-bold text-white lg:px-6 bg-hotel-green hover:bg-hotel-green-darker rounded-2xl">
                <SearchIcon className="w-6 h-6 text-white"></SearchIcon>
                <span className="ml-6">プランを検索</span>
            </button>
        </div>
    )
}

export default SearchBox
