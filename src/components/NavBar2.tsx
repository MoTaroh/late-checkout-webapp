import React from 'react'
import InfoPopover from './InfoPopover'

// TODO: ひどすぎる実装なので後ほど修正する

const NavBar2 = () => {
    return (
        <div className="fixed inset-x-0 top-0 z-50 h-16 py-4 bg-white shadow text-hotel-green md:h-20">
            <div className="container flex items-center justify-between">
                <h1 className="text-2xl font-bold ">LongSty</h1>
                <InfoPopover color="text-gray-600"></InfoPopover>
            </div>
        </div>
    )
}

export default NavBar2;
