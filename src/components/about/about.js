import React from 'react'
import './about.css'
import ME from '../../asssets/young-business-woman-checking-satisfaction-checklist-box-copy-space.jpg'
import {BsPersonVcard} from 'react-icons/bs'
import {AiFillFileAdd} from 'react-icons/ai'
import {FaAward} from 'react-icons/fa'

const About = () => {
  const listArr=[
    {
      id:1,
      icon:<BsPersonVcard />,
      title:"Clients",
      para:"300+ Worldwide"
    }, {
      id:2,
      icon:<AiFillFileAdd />,
      title:"Projects",
      para:"80+ Projects"
    }, {
      id:3,
      icon:<FaAward />,
      title:"Experience",
      para:"5+ yrs Expertise "
    }
  ]
  return (
    <section id="about">
      <div className='container'>
      <h3 align="center"><span>About</span> Me</h3>
      <div className='about-container'>
        <div className='photo'>
          <div className="photo-container">
          <img src={ME} className="about-Me" alt="" />
          </div>
        </div>
        <div className="content-container">
          <div className="content-box">
         {
          listArr.map((items)=>(
            <div className='content' key={items.id}>
              <p classname="content-a" href="">{items.icon}</p>
              <h4>{items.title}</h4>
              <p>{items.para}</p>
            </div>
          ))
         }</div>
         <p className="about-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate quidem doloribus laboriosam exercitationem consequuntur ea labore</p>

         <a href="#contact" className='btn-primary about-talk'>Lets Contact</a>
        </div>
      </div></div>
    </section>
  )
}

export default About