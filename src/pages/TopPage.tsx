import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import SearchBox from '../components/SearchBox'

const TopPage = () => {
    return (
        <div className="object-center bg-center bg-cover bg-hero-image">
            <div className="container relative max-h-screen min-h-screen">
                <NavBar></NavBar>
                <div className="z-0 flex items-center justify-center transform translate-y-48">
                    <Hero/> 
                </div>
                <div className="absolute inset-x-0 bottom-0 mx-4 mb-4 lg:mb-40">
                    <SearchBox/>
                </div>
            </div>
        </div>
    )
}

export default TopPage
