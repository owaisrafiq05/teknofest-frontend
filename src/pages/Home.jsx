import React from 'react'
import HeroSection from '../components/HomePageComponents/heroSection'
import OverView from '../components/HomePageComponents/overView'
import TeamSection from '../components/HomePageComponents/teamSection'
const Home = () => {
  return (
    <div>
        <HeroSection/>
        <OverView/>
        <TeamSection/>
    </div>
  )
}

export default Home