import React from 'react'
import './hero.scss'

export const Hero = () => {
  return (
    <div className='hero-div'>
        <div className='hero-img' >
            <img src="hero.png" alt="" />
        </div>
        <div className='slogan '>
            <p>“ Build Your Dream App 
          with Us: Turning Ideas into Reality!.. ”</p>
        </div>
        <div className='btn1'>
            <button>View More</button>
        </div>
    </div>
  )
}
