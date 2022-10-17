import './index.scss'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import PortfolioCarousel from '../PortfolioCarousel'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone" id="portfolio-text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'My Work'.split('')}
              idx={15}
            />
          </h1>
        </div>
        <PortfolioCarousel />
      </div>
    </>
  )
}

export default Portfolio
