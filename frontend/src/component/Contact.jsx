import React, { useEffect } from 'react'
import '../style/Contact.css'
import ContactSection from './ContactSection '
import Footer from './Footer'
import Navbar from './Navbar'
import { useMyContext } from '../context/MyContext'
function Contact() {
    const { setSelected, setIsScrolled } =useMyContext()

    useEffect(() => {
     setIsScrolled(true)
     setSelected("contact")
    }, [])


    
    
  return ( 
    <div>
        <Navbar/>
        <section className='c_section1'>
            <ContactSection  />
            <div className='c_section11'>
                <p>Follow Us</p>
                <div className='c_section11_1'>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>

            </div>

        </section>
        <Footer/>
    </div>
  )
}

export default Contact