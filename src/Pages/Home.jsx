import React from 'react'
import HeroSection from '../components/Hero/HeroSection'
import Loader from '../components/Hero/Loader'

import CoffeeFeatures from '../components/HomeSec/CoffeeFeatures'

import Categories from '../components/HomeSec/Categories'

import CurvedLoop from '../components/HomeSec/CurvedLoop'
import CoffeeCup3D from '../components/HomeSec/CoffeeCup3D'
import BestSeller from '../components/HomeSec/BestSeller'

import ScrollReveal from '../components/HomeSec/ScrollReveal'
import cafforaImg from '../assets/images/Caffora.png'

const Home = () => {
  return (
    <div className='min-h-[600vh] relative z-20 '>
      {/* <Loader /> */}
      <HeroSection />

      {/* //mt-1.5 */}
      <div className=''>
        <CoffeeFeatures />
        <CoffeeFeatures />
        <CoffeeFeatures />
        <CoffeeFeatures />
        <CoffeeFeatures />
      </div>


      {/* <Categories /> */}
      <div>

        {/* <BestSeller /> */}
      </div>

      {/* <CurvedLoop
        marqueeText={`☕ Wake Up & Smell ✦ the Coffee — At Caffora, ☕ We Craft   Moments, ✦ One Perfect Cup  at a Time. `}
        speed={3}
        curveAmount={150}
        direction="right"
        interactive={true}
        className="custom-text-style"
        cardClass="h-[100px] sm:h-[150px] lg:h-[270px] bg-black"
      /> */}


      <div className='py-40 px-2 lg:p-40 relative bg-cover bg-no-repeat sm:bg-center bg-opacity-10
    bg-[45%] h-[100vh] flex items-center justify-center' style={{ backgroundImage: `url(${cafforaImg})`  }}>
      <div className="absolute inset-0 bg-black/50"></div>
        <ScrollReveal/>

      </div>


    
    </div>
  )
}

export default Home
// Wake Up & Smell the Coffee — At Caffora, We Craft Moments, One Perfect Cup at a Time.