import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
const Homelinks = () => {
  return (
    <div className="HomeLinks">
        <a href="http://www.facebook.com"><AiFillFacebook /></a>
        <a href="http://www.linkedIn.com"><BsLinkedin/></a>
        <a href="http://www.instagram.com"><AiOutlineInstagram/></a>
    </div>
  )
}

export default Homelinks