import React, {useState} from 'react'
import {InformationCircleIcon} from '@heroicons/react/outline'

// TODO: ひどすぎる実装なので後ほど修正する

const NavBar2 = () => {
    const [infoIsOpen, setInfoIsOpen] = useState(false)
    const handleClick = () => {
        setInfoIsOpen(prevState => !prevState)
        console.log(infoIsOpen)
    }
    return (
        <div className="flex items-center justify-between h-16 px-4 py-4 text-gray-600">
            <h1 className="text-2xl font-bold ">LOGO</h1>
            <button onClick={handleClick}>
                <InformationCircleIcon className="w-6 h-6"></InformationCircleIcon>
            </button>
        </div>
    )
}

export default NavBar2;
