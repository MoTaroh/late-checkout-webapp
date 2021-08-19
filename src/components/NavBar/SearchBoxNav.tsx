import { SearchIcon } from '@heroicons/react/outline'
import { registerLocale } from "react-datepicker"
import ja from 'date-fns/locale/ja'
import StayDateInput from '../SearchBox/StayDateInput'
import StayPrefectureInput from '../SearchBox/StayPrefectureInput'
import StayPersonNumInput from '../SearchBox/StayPersonNumInput'
registerLocale('ja', ja)

const SearchBoxNav = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="w-2/3 px-4 py-3 text-gray-500 bg-gray-100 cursor-pointer rounded-2xl lg:hidden">
                2021年10月14日
            </div>
            <div className="items-center hidden px-4 py-2 space-x-2 border border-gray-300 lg:flex rounded-2xl">
                <div className="flex text-gray-500 divide-x-2 divide-gray-100">
                    <div className="">
                        <StayDateInput></StayDateInput>
                    </div>
                    <div className="pl-3">
                        <StayPrefectureInput></StayPrefectureInput>
                    </div>
                    <div className="pl-3">
                        <StayPersonNumInput></StayPersonNumInput>
                    </div>
                </div>
                <button className="px-4 py-2 bg-hotel-green rounded-2xl">
                    <SearchIcon className="w-6 h-6 text-white"></SearchIcon>
                </button>
            </div>
        </div>
    )
}

export default SearchBoxNav;
