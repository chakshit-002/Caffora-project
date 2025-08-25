import React from 'react'
import LiquidChrome from './LiquidChrome'

const HeroSection = () => {
    return (
        <div className='h-[100vh]'>
            <LiquidChrome
                baseColor={[0.6, 0.5, 0.3]}
                speed={0.14}
                amplitude={0.6}
                interactive={true}
            />
        </div>
    )
}

export default HeroSection