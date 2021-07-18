import React from 'react'
import InfoPopover from './InfoPopover'

// TODO: ひどすぎる実装なので後ほど修正する

const NavBar2 = () => {
    return (
        <div className="flex items-center justify-between h-16 py-4 text-gray-600">
            <h1 className="text-2xl font-bold ">LOGO</h1>
            <InfoPopover color="text-gray-600"></InfoPopover>
        </div>
    )
}

export default NavBar2;
