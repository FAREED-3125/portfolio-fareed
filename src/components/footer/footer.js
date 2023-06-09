import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <section id="section">
      
      <div className='container'>
        <div className='footer-container'>
          <h3>Fareed &copy; copyright</h3>
       <div className='link-footer'>
        <a href="#">Home</a>
        <a href="#about">About me</a>
        <a href="#contact">contact me</a>
       </div>
    <div className="footer-Links">
        <a href="http://www.facebook.com"><AiFillFacebook /></a>
        <a href="http://www.linkedIn.com"><BsLinkedin/></a>
        <a href="http://www.instagram.com"><AiOutlineInstagram/></a>
    </div>
        </div>
      </div>
    </section>
  )
}

export default Footer