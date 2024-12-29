import React, { useState,useEffect } from 'react'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { useMyContext } from '../context/MyContext'
function Navbar() {
    const { isScrolled,setSelected,selected } =useMyContext()

    function handleHome(val){
        setSelected(val)
    }
    console.log(selected)


  return (
    <div className={`nav_main ${isScrolled}`}>
       <div className='nav_con'>
     <div className='nav_con1'>
      <img src={logo} alt="" />
     </div>
     <div className='nav_con2'>
     <Link to="/" smooth={true} duration={500}>
      <div onClick={()=>handleHome('home')} className={`nav_con1 ${selected=='home'?'home':""}`}>Home</div>
      </Link>
      <Link to="/web-development" smooth={true} duration={500}>
      <div onClick={()=>handleHome('web')} className={`nav_con1 ${selected=='web'?'web':""}`}>Web Development</div>
      </Link>
      <Link to="/digital-marketing" smooth={true} duration={500}>
      <div onClick={()=>handleHome('digital')} className={`nav_con1 ${selected=='digital'?'digital':""}`}>digital Marketing</div>
      </Link>

      <Link to="/data-analytics" smooth={true} duration={500}>
      <div onClick={()=>handleHome('data')} className={`nav_con1 ${selected=='data'?'data':""}`}>Data analytics</div>
      </Link>
   
      <Link to="/contact" smooth={true} duration={500}>
      <div onClick={()=>handleHome('contact')} className={`nav_con1 ${selected=='contact'?'contact':""}`}>Contact</div>
      </Link>
     </div>
       </div>
    </div>
  )
}

export default Navbar