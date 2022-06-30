import { SearchIcon } from "@heroicons/react/outline";
import { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import StayDateInput from "../SearchBox/StayDateInput";
import StayPrefectureInput from "../SearchBox/StayPrefectureInput";
import StayPersonNumInput from "../SearchBox/StayPersonNumInput";
import { useContext } from "react";
import { SearchContext } from "../../App";
import { callHotelsApi } from "../../api/HotelAPI";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { CookieOption } from "../../types/types";
registerLocale("ja", ja);

type Props = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

// TODO: Remove duplication code from SearchBox.tsx
const SearchBoxNav: React.VFC<Props> = ({ state, setState }) => {
  const history = useHistory();
  const { stayDate, stayCount, personNum, handleIsLoading, handleHotels } =
    useContext(SearchContext);
  const [cookies, setCookie] = useCookies();
  const handleCookie = (key: string, value: string, options: object = {}) => {
    setCookie(key, value, options);
  };
  const cookieOption: CookieOption = {
    cookies: cookies,
    handler: handleCookie,
  };

  const handleLink = async (path: string) => {
    handleIsLoading(true);
    history.push(path);
    const hotels = await callHotelsApi(
      stayDate,
      stayCount,
      personNum,
      cookieOption
    );
    handleHotels(hotels);
    handleIsLoading(false);
  };

  const dateToString = () => {
    return `${stayDate.getFullYear()}年${
      stayDate.getMonth() + 1
    }月${stayDate.getDate()}日`;
  };
  return (
    <div className="flex items-center justify-center w-full">
      <button
        onClick={() => setState(!state)}
        className="w-2/3 px-4 py-3 cursor-pointer text-slate-500 bg-slate-100 rounded-2xl lg:hidden"
      >
        {dateToString()}
      </button>
      <div className="items-center hidden px-4 py-2 space-x-2 border border-slate-300 lg:flex rounded-2xl">
        <div className="flex divide-x-2 text-slate-500 divide-slate-100">
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
        <button
          onClick={() => handleLink("/hotels")}
          className="px-4 py-2 bg-hotel-green rounded-2xl"
        >
          <SearchIcon className="w-6 h-6 text-white"></SearchIcon>
        </button>
      </div>
    </div>
  );
};

export default SearchBoxNav;
