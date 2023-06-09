import React from 'react'
import './header.css'
import va from'../../asssets/pleaseOpen.jpg'
const HeaderLink = () => {
  return (
    <div className="headLink">
        <a href={va} className='btn-primary' download>Download CV</a>
        
        <a href="#contact" className='btn' >Let's Ping</a>
   </div>
  )
}

export default HeaderLink