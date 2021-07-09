import React from 'react'

const SearchBox = () => {
    return (
        <div>
            <div className="flex flex-col p-3 mx-10 shadow-xl rounded-2xl lg:flex-row">
                <div className="flex items-center px-4 pb-2 lg:flex-col">
                    <div>CI</div>
                    <input className="p-2 ml-4 text-lg font-bold text-gray-600 bg-gray-200" type="text" />
                </div>
                <div className="w-full h-0.5 bg-gray-200"></div>
                <div className="flex items-center px-4 py-2">
                    <div>MI</div>
                    <input className="p-2 ml-4 text-lg font-bold text-gray-600 bg-gray-200" type="text" />
                    <div className="w-0.5 bg-gray-400 ml-4"></div>
                    <div>PI</div>
                    <input className="p-2 ml-4 text-lg font-bold text-gray-600 bg-gray-200" type="text" />
                </div>
                <button className="px-4 py-5 text-lg font-bold text-white bg-green-300 rounded-2xl">プランを検索</button>
            </div>
        </div>
    )
}

export default SearchBox
