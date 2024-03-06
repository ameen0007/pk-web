import React from 'react'
import './hero.scss'

export const Hero = () => {
  return (
    <div className='hero-div'>
        <div className='hero-img' >
            <img src="hero.png" alt="" />
        </div>
        <div className='slogan '>
            <h2>“ BUILD YOUR DREAM APP 
          WITH US ”</h2>
          <p>we are experienced developers dedicated to bringing your app ideas to life.</p>
        </div>
        <div className='btn1'>
            <button>View More</button>
        </div>
      
    </div>
  )
}
