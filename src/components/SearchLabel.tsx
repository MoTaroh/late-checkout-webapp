import React from 'react'

const SearchLabel = (props: any) => {
    return (
        <label className="hidden text-xs font-bold lg:block text-hotel-green">
            {props.text}
        </label>
    )
}

export default SearchLabel
