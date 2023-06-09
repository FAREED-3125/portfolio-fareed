import React from 'react'
import HeaderLink from './HeaderLink'
import './header.css'
import Photo from './photo'
import Homelinks from './Homelinks'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Header = () => {
  return (
    <>
      <header >
          <div className='container header-container '>
            <p><span style={{color:"var(--orange)"}}>Hello</span>,I'm</p>
            <h1 style={{fontSize:"2.5em",fontWeight:"700"}}>Fareed</h1>
            <p>Software Developer</p>
            <Homelinks />
          <HeaderLink />
          <Photo />   
          <p  style={{color:"var(--orange)"}} className="scroll-p">Scroll down <AiOutlineArrowRight /></p>
           </div>
        </header>
    </>
  )
}

export default Header