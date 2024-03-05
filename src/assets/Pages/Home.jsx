import React from 'react'
import './home.scss'
import { Header } from '../Components/Header/Header'
import { Hero } from '../Components/Hero/Hero'


export const Home = () => {
  return (
    <section className='section1'>
      <Header/>
      <Hero/>
    </section>
  )
}
