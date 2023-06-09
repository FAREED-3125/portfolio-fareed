import React, { useRef } from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const Contact = () => {
  const userName=useRef()
  const consoleName=(event)=>{
     event.preventDefault();
     const name=userName.current.value;
     alert(`Thanks for your reponse, ${name}.I will get Back to you later`)
  }
  return (
    
    <section id="contact" loading="lazy">
      
      <div className='container'>
      <h3 align="center"><span >Contact</span>-me</h3>
        <div className="contact-container">
          <div className='contact-me'>
            <div className='contact-details'>
              <p><AiOutlineMail /></p>
              <h3>E-mail</h3>
              <a href="mailto:smartfareed107@gmail.com">send a mail</a>
            </div>
            <div className='contact-details'>
              <p><BsMessenger /></p>
              <h3>Facebook</h3>
              <a href="http://www.facebook.com">send a message</a>
            </div>
            <div className='contact-details'>
              <p><AiOutlineWhatsApp /></p>
              <h3>What's up</h3>
              <a href="https://api.whatsapp.com/send?phone+919384658769">send a chat</a>
            </div>
          </div>
          <div className='contact-form' >
          <form action="" className='myForm'>
            <input ref={userName} type="text" className='InputText'  placeholder='Enter your Name'/>
           
           <input type="email" className='InputText' id=""  placeholder='Enter your E-mail Id' />
           <textarea name="" id="" cols="30" rows="7" className='InputText' placeholder='Send a Message'></textarea>
          </form>
           <a href="#" onClick={consoleName} className='btn send-a'>Send Message</a>
      </div>
          </div>
        </div>
     
    </section>
  )
}

export default Contact