import React from "react";
import { Hotel } from "../types/types";
import HotelListItem from "./HotelListItem";
import RegionName from "./RegionName";
import SelectList from "./SelectList";

type Props = {
  hotels: Array<Hotel>;
};

type Result = {
  [key: string]: Array<Hotel>;
};

const HotelList: React.VFC<Props> = ({ hotels }) => {
  const rows: any[] = [];
  const regionList: string[] = [];

  // hotelsを走査して、地域ごとにグルーピングする
  let result: Result = {};
  hotels.forEach((hotel: Hotel) => {
    console.log(hotel);
    if (!hotel) {
      console.log("Skip for null value");
      return;
    }

    if (!regionList.includes(hotel.regionName)) {
      console.log("Add to regionList");

      regionList.push(hotel.regionName);
      result[hotel.regionName] = [];
    }
    result[hotel.regionName].push(hotel);
  });

  console.log(result);

  Object.keys(result).forEach((key) => {
    rows.push(<RegionName regionName={key} key={key} />);
    result[key].forEach((hotel: Hotel) =>
      rows.push(<HotelListItem hotel={hotel} key={hotel.hotelNo} />)
    );
  });

  return (
    <div className="flex flex-col flex-1 space-y-3 lg:col-span-2 lg:space-y-6">
      <div className="flex items-start justify-between">
        <h2 className="flex-none text-lg font-bold text-gray-800 ">
          ホテル一覧
        </h2>
        <SelectList regions={regionList}></SelectList>
      </div>
      <div className="relative space-y-3 lg:space-y-6">{rows}</div>
    </div>
  );
};

export default HotelList;
