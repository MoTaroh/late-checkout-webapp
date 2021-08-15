import React from 'react'
import HotelListItem from './HotelListItem';
import RegionName from './RegionName'
import SelectList from './SelectList'

const HotelList = (props: any) => {
    const rows: any[] = [];
    let lastRegion: string = "";
    const regionList: string[] = [];

    props.hotels.forEach((hotel: any) => {
        // 地域名がすでに入っていればスルー
        if (hotel.regionName !== lastRegion) {
            rows.push(
                <RegionName
                    region={hotel.regionName}
                    key={hotel.regions}
                />
            );
            regionList.push(hotel.regionName);
        }
        // ホテル情報をセット
        rows.push(
            <HotelListItem 
                hotel={hotel}
                searchInfo={props.searchInfo}
                key={hotel.hotelNo}
            />
        );
        lastRegion = hotel.regionName;
    });

    return (
        <div className="flex flex-col flex-1 space-y-3 lg:col-span-2 lg:space-y-6">
            <div className="flex items-start justify-between">
                <h2 className="text-lg font-bold text-gray-800 ">ホテル一覧</h2>
                <SelectList regions={regionList}></SelectList>
            </div>
            <div className="relative space-y-3 lg:space-y-6">{rows}</div>
        </div>
    )
}

export default HotelList
