import React from 'react'
import HeroSection from '../components/HeroSection'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      
      {/* Add margins to other sections individually if they don't have backgrounds */}
      <div className="mx-4 sm:mx-[10%]">
        <SpecialityMenu />
        <TopDoctors />
        <Banner />
      </div>
    </div>
  )
}

export default Home