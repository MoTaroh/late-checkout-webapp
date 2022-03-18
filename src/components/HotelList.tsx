import React, { useState } from "react";
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

const defaultRegion = "地域を選択";

const displayHotels = (result: Result, filterRegion: string) => {
  let rows: any[] = [];
  console.log(result);

  if (Object.keys(result)[0] === "") {
    rows.push(
      <div key="" className="p-3 bg-white border border-slate-300 rounded-xl">
        <div className="text-sm text-slate-500">
          レイトチェックアウトプランが見つかりませんでした。
        </div>
      </div>
    );
  } else {
    if (filterRegion === defaultRegion) {
      // no filter
      Object.keys(result).forEach((key) => {
        rows.push(<RegionName regionName={key} key={key} />);
        result[key].forEach((hotel: Hotel) =>
          rows.push(<HotelListItem hotel={hotel} key={hotel.hotelNo} />)
        );
      });
    } else {
      // filter
      Object.keys(result).forEach((key) => {
        if (key === filterRegion) {
          rows.push(<RegionName regionName={key} key={key} />);
          result[key].forEach((hotel: Hotel) =>
            rows.push(<HotelListItem hotel={hotel} key={hotel.hotelNo} />)
          );
        }
      });
    }
  }
  return rows;
};

const HotelList: React.VFC<Props> = ({ hotels }) => {
  const [selected, setSelected] = useState(defaultRegion);

  const regionList: string[] = [defaultRegion];

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

  return (
    <div className="flex flex-col flex-1 space-y-3 lg:col-span-2 lg:space-y-6">
      <div className="flex items-start justify-between">
        <h2 className="flex-none text-lg font-bold text-slate-800 ">
          ホテル一覧
        </h2>
        <SelectList
          regions={regionList}
          selected={selected}
          setSelected={setSelected}
        ></SelectList>
      </div>
      <div className="relative space-y-3 lg:space-y-6">
        {displayHotels(result, selected)}
      </div>
    </div>
  );
};

export default HotelList;
