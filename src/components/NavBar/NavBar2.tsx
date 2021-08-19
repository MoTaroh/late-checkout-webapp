import { UserCircleIcon } from '@heroicons/react/outline';
import React from 'react'
import SearchBoxNav from './SearchBoxNav';

// TODO: ひどすぎる実装なので後ほど修正する

const NavBar2 = () => {
    return (
        <div className="fixed inset-x-0 top-0 z-50 h-16 py-4 bg-white shadow md:h-20">
            <div className="container flex items-center justify-between h-full">
                <h1 className="text-2xl font-bold text-hotel-green">LongSty</h1>
                <SearchBoxNav></SearchBoxNav>
                <button className="hidden px-4 py-2 font-bold text-white rounded-md sm:block hover:bg-hotel-green-darker bg-hotel-green">Login</button>
                <div className="block sm:hidden">
                    <UserCircleIcon className="w-8 h-8 text-gray-500"></UserCircleIcon>
                </div>
            </div>
        </div>
    )
}

export default NavBar2;
