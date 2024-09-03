import React from 'react'
import Hero from '../components/hero'
import Homecards from '../components/homecards'
import Joblist from '../components/joblist'
import Viewalljobs from '../components/viewalljobs'

const Home = () => {
  return (
    <>
        <Hero />
        <Homecards />
        <Joblist ishome ={true}/>
        <Viewalljobs />
    </>
  )
}

export default Home