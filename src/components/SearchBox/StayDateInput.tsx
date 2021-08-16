import { CalendarIcon } from '@heroicons/react/outline'
import React, { useContext } from 'react'
import DatePicker, { registerLocale } from "react-datepicker"
import ja from 'date-fns/locale/ja'
import { SearchContext } from '../../App'
registerLocale('ja', ja)

const StayDateInput = () => {
    const {stayDate, handleStayDate, stayCount, handleStayCount} = useContext(SearchContext)
    return (
        <div className="flex items-center px-4 py-2 divide-x lg:divide-x-0 lg:mt-3 lg:px-0 lg:py-0">
            <div className="flex items-center flex-1 lg:w-3/4">
                <CalendarIcon className="w-6 h-6 text-hotel-green"></CalendarIcon>
                <DatePicker
                    locale="ja"
                    dateFormat="yyyy年MM月dd日"
                    selected={stayDate}
                    onChange={handleStayDate}
                    nextMonthButtonLabel=">"
                    previousMonthButtonLabel="<"
                    className="relative w-full px-2 py-2 pl-4 text-lg font-medium bg-white rounded-md cursor-pointer hover:bg-opacity-25 hover:bg-gray-300 lg:font-bold">
                </DatePicker>
            </div>
            <div className="flex items-center lg:w-1/4">
                <select
                    name="stayCount"
                    id="stayCount"
                    value={stayCount}
                    onChange={handleStayCount}
                    className="px-4 py-2 text-lg font-medium bg-white rounded-md appearance-none cursor-pointer hover:bg-opacity-25 hover:bg-gray-300 lg:font-bold"
                >
                    <option value="1">1 泊</option>
                    <option value="2">2 泊</option>
                    <option value="3">3 泊</option>
                    <option value="4">4 泊</option>
                    <option value="5">5 泊</option>
                    <option value="6">6 泊</option>
                    <option value="7">7 泊</option>
                    <option value="8">8 泊</option>
                    <option value="9">9 泊</option>
                </select>
            </div>
        </div>
    )
}

export default StayDateInput
