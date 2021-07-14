import React from 'react'
import {InformationCircleIcon} from '@heroicons/react/outline'

const NavBar = () => {
    return (
        <div className="flex items-center justify-between h-16 px-4 py-4 text-white">
            <h1 className="text-2xl font-bold">LOGO</h1>
            <InformationCircleIcon className="w-6 h-6 text-white"></InformationCircleIcon>
        </div>
    )
}

export default NavBar;
