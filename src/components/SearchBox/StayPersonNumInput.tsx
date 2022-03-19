import { UserIcon } from "@heroicons/react/outline";
import React, { useContext } from "react";
import { SearchContext } from "../../App";

const StayPersonNumInput = () => {
  const { personNum, handlePersonNum } = useContext(SearchContext);
  return (
    <div className="flex items-center px-4 lg:px-0">
      <UserIcon className="w-6 h-6 text-hotel-green"></UserIcon>
      <select
        id="person_num"
        name="person_num"
        value={personNum}
        onChange={handlePersonNum}
        className="flex-1 px-4 py-2 text-lg font-medium bg-white rounded-md appearance-none cursor-pointer hover:bg-opacity-25 hover:bg-slate-300 lg:font-bold"
      >
        <option value="1">1 名</option>
        <option value="2">2 名</option>
        <option value="3">3 名</option>
        <option value="4">4 名</option>
        <option value="5">5 名</option>
        <option value="6">6 名</option>
        <option value="7">7 名</option>
        <option value="8">8 名</option>
        <option value="9">9 名</option>
      </select>
    </div>
  );
};

export default StayPersonNumInput;
