import React, { useState }  from 'react'
import { useHistory } from 'react-router-dom' 
import {CalendarIcon, LocationMarkerIcon, UserIcon, SearchIcon} from '@heroicons/react/outline'
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ja from 'date-fns/locale/ja'
registerLocale('ja', ja)

const SearchBox = () => {
    // プラン検索したら画面遷移
    const history = useHistory();
    const handleLink = (path: any) => history.push(path);

    // datepicker
    const initialDate = new Date()
    const [startDate, setStartDate] = useState(initialDate)
    const handleChange = (date: any) => {
        setStartDate(date)
    }
    return (
        <div className="flex flex-col px-4 pb-4 bg-white shadow-xl rounded-2xl md:max-w-sm">
            <div className="flex flex-col divide-y divide-gray-200 lg:flex-row">
                <div className="flex items-center px-4 py-2 lg:flex-col">
                    <CalendarIcon className="w-6 h-6 text-gray-600"></CalendarIcon>
                    <DatePicker
                        locale="ja"
                        selected={startDate}
                        onChange={handleChange}
                        className="flex-1 px-4 py-2 text-lg font-bold text-gray-600 bg-white">
                    </DatePicker>
                </div>
                <div className="flex items-center justify-between py-2 divide-x">
                    <div className="flex items-center px-4">
                        <LocationMarkerIcon className="w-6 h-6 text-gray-600"></LocationMarkerIcon>
                        <select className="flex-1 px-4 py-2 text-lg font-bold text-gray-600 bg-white" >
                            <option value="大阪">大阪府</option>
                        </select>
                    </div>
                    <div className="flex items-center px-4">
                        <UserIcon className="w-6 h-6 text-gray-600"></UserIcon>
                        <select id="person_num" name="person_num" className="flex-1 px-4 py-2 text-lg font-bold text-gray-600 bg-white">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                </div>
            </div>
            <button onClick={() => handleLink('/hotels')} className="flex items-center justify-center px-4 py-4 text-lg font-bold text-white bg-hotel-green rounded-2xl">
                <SearchIcon className="w-6 h-6 text-white"></SearchIcon>
                <span className="ml-6">プランを検索</span>
            </button>
        </div>
        // <div className="grid grid-cols-3 px-4 pb-4 bg-white divide-x divide-y divide-gray-200 shadow-xl rounded-2xl">
        //     <div className="flex items-center col-span-3 px-4 py-2">
        //         <CalendarIcon className="w-6 h-6 text-gray-600"></CalendarIcon>
        //         <input className="p-2 ml-4 text-lg font-bold text-gray-600 bg-white" type="text" />
        //     </div>
        //     <div className="flex items-center col-span-2 px-4 py-2">
        //         <LocationMarkerIcon className="w-6 h-6 text-gray-600"></LocationMarkerIcon>
        //         <select className="flex-1 px-4 py-2 text-lg font-bold text-gray-600 bg-white" >
        //             <option value="大阪">大阪府</option>
        //         </select>
        //     </div>
        //     <div className="flex items-center px-4">
        //         <UserIcon className="w-6 h-6 text-gray-600"></UserIcon>
        //         <select id="person_num" name="person_num" className="flex-1 px-4 py-2 text-lg font-bold text-gray-600 bg-white">
        //             <option value="1">1</option>
        //             <option value="2">2</option>
        //             <option value="3">3</option>
        //             <option value="4">4</option>
        //             <option value="5">5</option>
        //             <option value="6">6</option>
        //             <option value="7">7</option>
        //             <option value="8">8</option>
        //             <option value="9">9</option>
        //         </select>
        //     </div>
        //     <button className="flex items-center justify-center col-span-3 px-4 py-4 text-lg font-bold text-white bg-hotel-green rounded-2xl">
        //         <SearchIcon className="w-6 h-6 text-white"></SearchIcon>
        //         <span className="ml-6">プランを検索</span>
        //     </button>
        // </div>
    )
}

export default SearchBox
