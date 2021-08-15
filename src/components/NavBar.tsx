import React from 'react'
import InfoPopover from './InfoPopover'

const NavBar = () => {
    return (
        <div className="flex items-center justify-between h-16 py-4 text-white">
            <h1 className="text-2xl font-bold">LongSty</h1>
            <InfoPopover color="text-white"></InfoPopover>
        </div>
    )
}

export default NavBar;
