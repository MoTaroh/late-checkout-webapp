import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import SearchBox from '../components/SearchBox'

const TopPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Hero/>
            <SearchBox/>
        </div>
    )
}

export default TopPage
