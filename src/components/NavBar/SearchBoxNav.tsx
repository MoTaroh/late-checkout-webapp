import { SearchIcon } from '@heroicons/react/outline'
import { registerLocale } from "react-datepicker"
import ja from 'date-fns/locale/ja'
import StayDateInput from '../SearchBox/StayDateInput'
import StayPrefectureInput from '../SearchBox/StayPrefectureInput'
import StayPersonNumInput from '../SearchBox/StayPersonNumInput'
registerLocale('ja', ja)

const SearchBoxNav = () => {
    return (
        <div>
            <div className="bg-gray-300 lg:hidden"></div>
            <div className="hidden lg:flex">
                <div className="flex divide-x-2 divide-gray-100">
                    <StayDateInput></StayDateInput>
                    <StayPrefectureInput></StayPrefectureInput>
                    <StayPersonNumInput></StayPersonNumInput>
                </div>
                <button className="bg-hotel-green rounded-2xl">
                    <SearchIcon className="w-6 h-6 text-white"></SearchIcon>
                </button>
            </div>
        </div>
    )
}

export default SearchBoxNav;
