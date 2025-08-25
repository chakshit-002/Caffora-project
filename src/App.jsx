import React from 'react'

import LiquidChrome from './components/Home/LiquidChrome';
const App = () => {
  return (


    <div className="w-full h-screen relative">

      <LiquidChrome
        baseColor={[0.6, 0.5, 0.3]}
        speed={0.14}
        amplitude={0.6}
        interactive={true}
      />
    </div>


  )
}

export default App
