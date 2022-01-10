import { LocationMarkerIcon } from '@heroicons/react/outline'
import React from 'react'

const StayPrefectureInput = () => {
    return (
        <div className="flex items-center flex-1 px-4 lg:px-0">
            <LocationMarkerIcon className="w-6 h-6 text-hotel-green"></LocationMarkerIcon>
            <select className="flex-1 px-4 py-2 text-lg font-medium bg-white rounded-md appearance-none cursor-pointer hover:bg-opacity-25 hover:bg-gray-300 lg:font-bold" >
                <option value="大阪">大阪府</option>
            </select>
        </div>
    )
}

export default StayPrefectureInput
