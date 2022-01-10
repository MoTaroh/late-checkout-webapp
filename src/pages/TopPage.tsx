import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar/NavBar'
import SearchBox from '../components/SearchBox'

const TopPage = () => {
    return (
        <div className="object-center bg-center bg-cover bg-hero-image">
            <div className="container flex flex-col max-h-screen min-h-screen lg:px-12">
                <NavBar></NavBar>
                <div className="flex items-center justify-center flex-1 lg:justify-start">
                    <Hero/> 
                </div>
                <div className="flex justify-center mb-4 lg:mb-32">
                    <SearchBox/>
                </div>
            </div>
        </div>
    )
}

export default TopPage
