import React from 'react'

const HotelListItem = () => {
    return (
        <div className="flex items-center justify-between px-6 py-4 bg-white border border-gray-300 rounded-xl">
            <div className="flex flex-col">
                <h3 className="text-sm font-bold">ホテルマイステイズ御堂筋本町</h3>
                <span className="mt-3 text-sm font-bold text-hotel-green">10月14日のプラン一覧</span>
            </div>
            <div className="text-hotel-green">
                ＞
            </div>
        </div>
    )
}

export default HotelListItem
