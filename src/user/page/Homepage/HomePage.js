import React from 'react'
import Banner from './Banner/Banner'
import Intro from './Intro/Intro'
import About from './About/About'

export default function HomePage() {
  return (
    <div className='contner'>
      <Banner />
      <About />
      <Intro />
    </div>
  )
}