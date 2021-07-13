import React from 'react'

const SearchBox = () => {
    return (
        <div className="flex flex-col px-4 pb-4 bg-white shadow-xl rounded-2xl md:max-w-sm">
            <div className="flex flex-col divide-y divide-gray-200 lg:flex-row">
                <div className="flex items-center py-2 lg:flex-col">
                    <div className="ml-4">CI</div>
                    <input className="p-2 ml-4 text-lg font-bold text-gray-600 bg-white" type="text" />
                </div>
                <div className="flex items-center py-2 divide-x">
                    <div className="flex items-center flex-1 ml-4">
                        <div>MI</div>
                        <select className="w-full px-4 py-2 ml-4 text-lg font-bold text-gray-600 bg-white " >
                            <option value="大阪">大阪府</option>
                        </select>
                    </div>
                    <div className="flex items-center ml-4 mr-2">
                        <div className="ml-4">PI</div>
                        <select id="person_num" name="person_num" className="w-full px-4 py-2 ml-4 text-lg font-bold text-gray-600 bg-white">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                </div>
            </div>
            <button className="px-4 py-5 text-lg font-bold text-white bg-hotel-green rounded-2xl">プランを検索</button>
        </div>
    )
}

export default SearchBox
