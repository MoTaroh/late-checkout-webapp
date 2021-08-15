import React from 'react'

const RegionName = (props: any) => {
    return (
        <div className="sticky top-0 flex items-center justify-between py-2 bg-gray-100 space-x-9">
            <div className="text-sm text-gray-800 lg:text-base lg:font-bold">{props.region}</div>
            <div className="flex-1 h-px bg-hotel-green"></div>
        </div>
    )
}

export default RegionName
