import React from 'react'
import HotelListItem from '../components/HotelListItem'

const HotelListPage = () => {
    return (
        <div className="container flex flex-col bg-gray-100">
            <h2 className="mt-5 mb-6 text-lg font-bold text-gray-800">ホテル一覧</h2>
            <HotelListItem></HotelListItem>
        </div>
    )
}

export default HotelListPage
