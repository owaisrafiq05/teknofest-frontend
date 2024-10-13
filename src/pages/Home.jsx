import React from 'react'
import HeroSection from '../components/HomePageComponents/heroSection'
import OverView from '../components/HomePageComponents/overView'
import TeamSection from '../components/HomePageComponents/teamSection'
import InnovateSection from '../components/HomePageComponents/InnovateSection'
const Home = () => {
  return (
    <div>
        <HeroSection/>
        <OverView/>
        <TeamSection/>
        <InnovateSection/>
    </div>
  )
}

export default Home