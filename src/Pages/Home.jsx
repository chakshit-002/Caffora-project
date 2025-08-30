import React from 'react'
import HeroSection from '../components/Hero/HeroSection'
import Loader from '../components/Hero/Loader'

import CoffeeFeatures from '../components/HomeSec2/CoffeeFeatures'

import Categories from '../components/HomeSec2/Categories'

import CurvedLoop from '../components/HomeSec2/CurvedLoop'
import CoffeeCup3D from '../components/HomeSec2/CoffeeCup3D'

const Home = () => {
  return (
    <div className='h-[800vh]'>
      {/* <Loader /> */}
      <HeroSection />
      <div className='mt-1.5'>
        <CoffeeFeatures />
      </div>

    
      <Categories />
      {/* <BestSeller /> */}
      <CurvedLoop
        marqueeText={`☕ Wake Up & Smell ✦ the Coffee — At Caffora, ☕ We Craft   Moments, ✦ One Perfect Cup  at a Time. `}
        speed={3}
        curveAmount={150}
        direction="right"
        interactive={true}
        className="custom-text-style"
        cardClass="h-[100px] sm:h-[150px] lg:h-[270px] bg-black"
      />
    </div>
  )
}

export default Home
// Wake Up & Smell the Coffee — At Caffora, We Craft Moments, One Perfect Cup at a Time.