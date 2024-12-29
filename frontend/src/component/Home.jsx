import React, { useEffect } from 'react'
import '../style/Home.css'
import ClientFeedback from './ClientFeedback'
import digitalmarketing from '../images/digitalmarketing.png';
import webdevelopment from '../images/webdevelopment.jpg';
import ContactSection from './ContactSection ';
import Footer from './Footer';
import Navbar from './Navbar';
import { useMyContext } from '../context/MyContext'

function Home() { 

   const { setIsScrolled, setSelected } = useMyContext()
    useEffect(() => {
      setSelected('home')
        const handleScroll = () => {
          // Check if the page is scrolled more than 100px
          if (window.scrollY > 100) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        // Attach scroll event listener
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    const services = [
        {
            name:'web Development',
            desc:'Build stunning, responsive websites designed to captivate and convert.'
        },
        {
            name:'Digital Marketing',
            desc:'Drive growth with tailored strategies that put your brand in the spotlight.'
        },
        {
            name:'Data Analytics',
            desc:'Unlock insights from your data to make smarter, faster decisions.'
        }

    ]
  return (
    <div className='home_main'>
      <Navbar/>
        <section className='top_section'>
            <div className='hts_1'>
                <h1>Innovating Your Future, One Step at a Time</h1>
                <p>Discover how Innoverse Digital Services can elevate your business with cutting-edge web development, <br/> powerful digital marketing strategies, and actionable data insights.</p>
               <div className='hts_11'>
               <h2>From dreams to delivery, we’re your trusted partner in success. <br/> Let’s Build Something Extraordinary Together</h2>
               <button>Get Started</button>
               </div>

            </div>

            <div className='hts_3'>

               {services.map((e,i)=>(
                 <div key={i} className='hts_31'>
                    <h3>{e.name}</h3>
                    <p>{e.desc}</p>
                 </div>
               ))}
            </div>

        </section>
        



        <div className="section-container">
      <h1 style={{marginBottom:"4rem"}} className="home_heading">Innovative Digital Solutions for Businesses</h1>
      <div className="section-content">
        <div className="content-box">
          <h2 className="content-title">Innovative Digital Solutions for Businesses in <br/> Tamil Nadu</h2>
          <p className="content-text">
            At Innoverse Digital Solutions, based in Tamil Nadu, we offer a comprehensive range of
            cutting-edge services to elevate your online presence. From web development and digital
            marketing to data analytics, our solutions are crafted to help your business grow and
            succeed in the digital world. Whether you're a local business or a startup in Tamil Nadu,
            we have the expertise to create tailored solutions that cater to your unique needs.
          </p>
        </div>
        <div className="content-box">
          <h2 className="content-title">Your Digital Partner in Tamil Nadu</h2>
          <p className="content-text">
            We’re not just a service provider; we’re your trusted digital partner. At Innoverse, we
            specialize in creating robust e-commerce websites, eye-catching portfolios, and custom web
            solutions for businesses across Tamil Nadu and beyond. Our goal is to help you design
            responsive websites that not only engage your audience but also drive conversions. No
            matter your business size, our solutions are scalable and designed to meet your evolving
            needs.
          </p>
        </div>
      </div>
    </div>

    {/* <div className='imgae_section'>
        <img src={marketingplan} alt="" />

    </div> */}
    <div className='service_section'>
        <h2 className='home_heading'>our services</h2>
        <p className='home_subheading'>Discover a wide range of digital solutions crafted to empower your business in Tamil Nadu, India. From innovative <br/> web development to result-driven digital marketing strategies, we provide tailored services designed <br/> to meet your unique needs and   help you thrive in the digital era.</p>
        <div className="services-section">
      <div className="service-card">
        <div className="service-text">
          <h3 className="service-title">Digital Marketing</h3>
          <p className="service-description">
            Elevate your brand with our comprehensive digital marketing services, including SEO, SMM, and more. We craft strategies tailored to boost your online visibility, drive traffic, and engage your audience effectively.
          </p>
        </div>
        <div className="service-image">
          <img src={digitalmarketing} alt="Digital Marketing" />
        </div>
      </div>
      <div className="service-card">
        <div className="service-text">
          <h3 className="service-title">Web Development</h3>
          <p className="service-description">
            Transform your vision into reality with our web development expertise. From e-commerce platforms to portfolio websites and custom solutions, we design unique, responsive sites that enhance your online presence and captivate your audience.
          </p>
        </div>
        <div className="service-image">
          <img src={webdevelopment} alt="Web Development" />
        </div>
      </div>
    </div>
    </div>
    
    <ContactSection/>
    <ClientFeedback/>
    <Footer/>
    </div>
  )
}

export default Home