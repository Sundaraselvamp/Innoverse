import React, { useEffect } from 'react'
import '../style/Contact.css'
import ContactSection from './ContactSection '
import Footer from './Footer'
import Navbar from './Navbar'
import { useMyContext } from '../context/MyContext'

function Contact() {
    const { setSelected, setIsScrolled } = useMyContext()

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
                    <a href="https://www.facebook.com/profile.php?id=61570559792944" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/innoverse_digital_solutions/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/innoverse-digital-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Contact
