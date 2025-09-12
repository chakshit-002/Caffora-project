import React from 'react'

import LiquidChrome from './components/Hero/LiquidChrome';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import MainRoutes from './Routes/MainRoutes';
import { Footer } from './components/Footer';



const App = () => {
  return (


    <div className="w-full h-[100%] relative">


      <Navbar />
      <MainRoutes />
      <div className='h-[100vh]'></div>
      <Footer />

    </div>


  )
}

export default App




