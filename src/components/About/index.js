import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
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
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Hi there! I'm a recent graduate from the
            <a
              href="https://codeinstitute.net/full-stack-software-development-diploma/"
              target="_blank"
              rel="noreferrer"
            >
              Code institute
            </a>
          </p>
          <p>
            I love creating beautiful, responsive applications and i have a
            passion for front end development.
          </p>
          <p>
            Text about me being the greatest Text about me being the greatest
            Text about me being the greatest
          </p>
        </div>
      </div>
    </>
  )
}

export default About
