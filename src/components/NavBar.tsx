import React, {useState} from 'react'
import {InformationCircleIcon} from '@heroicons/react/outline'

const NavBar = () => {
    const [infoIsOpen, setInfoIsOpen] = useState(false)
    const handleClick = () => {
        setInfoIsOpen(prevState => !prevState)
        console.log(infoIsOpen)
    }
    return (
        <div className="flex items-center justify-between h-16 py-4 text-white">
            <h1 className="text-2xl font-bold">LOGO</h1>
            <button onClick={handleClick}>
                <InformationCircleIcon className="w-6 h-6 text-white"></InformationCircleIcon>
            </button>
        </div>
    )
}

export default NavBar;
