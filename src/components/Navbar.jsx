import React from 'react'
import GooeyNav from './Nav/GooeyNav'
const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#" },
];
const Navbar = () => {
    return (
        
      <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
          <div className='h-30 relative  w-full flex justify-center items-center '>
                <GooeyNav
                    items={items}
                    particleCount={15}
                    particleDistances={[90, 10]}
                    particleR={100}
                    initialActiveIndex={0}
                    animationTime={600}
                    timeVariance={300}
                    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                />
        </div>
      </nav>
        
    )
}

export default Navbar