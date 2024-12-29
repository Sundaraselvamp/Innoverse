import React, { useEffect } from 'react'
import '../style/WebDevelopment.css'
import webd from '../images/webd.jpg'
import webdevep from '../images/webdevep.jpeg'
import Footer from './Footer'
import Navbar from './Navbar'
import { useMyContext } from '../context/MyContext'
function WebDevelopment() {
   const { setIsScrolled } = useMyContext()
    useEffect(() => { 
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

    const services =[
        {
            name:"E-Commerce Solutions",
            desc:"Empower your business with robust e-commerce websites designed to drive sales and deliver seamless shopping experiences. From secure payment gateways to user-friendly interfaces, our solutions ensure your customers keep coming back.",
            image:'https://www.acces-referencement.fr/wp-content/uploads/2022/11/web5_r-445x265.jpeg'
        },
        {
            name:"Custom Website Solutions",
            desc:"Our experts create tailor-made websites that perfectly capture your brand identity while addressing your unique business needs. From concept to launch, we ensure your online presence stands out with functionality and style.",
            image:'https://www.acces-referencement.fr/wp-content/uploads/2022/11/web5_r-445x265.jpeg'
        },
        {
            name:"Portfolio Websites",
            desc:"Showcase your work with stunning portfolio websites designed to captivate your audience. Whether you’re an artist, freelancer, or business, our tailored web solutions help you present your skills and projects with style and professionalism.",
            image:'https://www.acces-referencement.fr/wp-content/uploads/2022/11/web5_r-445x265.jpeg'
        },
        {
            name:"Corporate Websites",
            desc:"Elevate your corporate identity with professionally designed websites that reflect your brand values and build trust with your audience. Our solutions focus on seamless navigation, responsive design, and functionality to meet the demands of modern businesses.",
            image:'https://www.acces-referencement.fr/wp-content/uploads/2022/11/web5_r-445x265.jpeg'
        },
        {
            name:"Educational Websites",
            desc:"Create an engaging online learning experience with custom educational websites designed to deliver content seamlessly. Whether it’s for schools, courses, or e-learning platforms, our solutions focus on intuitive navigation, interactive features, and scalable design to enhance the learning journey.",
            image:'https://www.acces-referencement.fr/wp-content/uploads/2022/11/web5_r-445x265.jpeg'
        },
        {
            name:"Basic Websites",
            desc:"Get your business online with a simple yet effective website that represents your brand. Our basic websites offer clean design, easy navigation, and essential functionality, making them perfect for small businesses, personal portfolios, or anyone looking to establish a strong online presence without complexity.",
            image:'https://www.acces-referencement.fr/wp-content/uploads/2022/11/web5_r-445x265.jpeg'
        },
        
    ]
    const chooseUs=[
        {
            title:"Custom Solutions Tailored to Your Needs",
            para:"Every business is unique, and so are its goals. We craft personalized digital strategies that are perfectly aligned with your vision, ensuring measurable success and growth."
        },
        {
            title:"Comprehensive Expertise",
            para:"From web development and cutting-edge e-commerce solutions to innovative digital marketing strategies (SEO, SMM) and data analytics, we provide a complete range of services to boost your brand’s visibility."
        },
        {
            title:"Proven Track Record of Success",
            para:"We use the latest industry tools and technologies to create modern, scalable solutions that ensure your business stays ahead of the competition in a rapidly evolving digital landscape."
        },
        {
            title:"Advanced Technologies for Future-Proof Solutions",
            para:"Our team is committed to delivering top-tier services, maintaining the highest industry standards, and exceeding client expectations. Quality is at the heart of everything we do."
        },
        {
            title:"Commitment to Excellence & Quality",
            para:"Our results-driven approach focuses on driving tangible outcomes. Whether it's higher search engine rankings, increased traffic, or improved conversion rates, we deliver what matters most to your business."

        },
        {
            title:"Transparent, Collaborative Process",
            para:"We believe in clear communication and collaboration. You’ll always be in the loop, ensuring transparency and trust at every step of the project."
        },
        {
            title:"Long-Term Partnerships",
            para:"We view our client relationships as long-term partnerships. Our goal is to help you grow and succeed, not just today, but for years to come."
        },
    ]
  return (
    <div>
        <Navbar/>
        <section className='wd_top_section'>
            <h1>Elegant Web Solutions for Your Business</h1>
            <p>Transform your digital presence with expertly crafted websites, including custom designs, e-commerce platforms, and portfolio showcases. Tailored to your needs, our web solutions help your brand stand out and thrive online.</p>
            <button>contact us</button>
        </section>
        <section className='wd_section2'>
            <h1>Web Development: Building Your Online Presence</h1>
            <p>Your website is more than just a digital brochure – it’s your business’s online identity. At Innoverse Digital Solutions, we specialize in creating custom, responsive websites designed to attract visitors and drive conversions. From e-commerce platforms to portfolios, we ensure your website is fast, user-friendly, and SEO-optimized for maximum impact.</p>

            <div className='wd_section2_1'>
                <div className='wd_section2_11'>
                    <h5>Why Your Business Needs a Website in Today’s Digital World</h5>
                    <p>In today’s fast-paced digital landscape, a website is not just a tool; it’s the foundation of your online presence and a vital part of your business strategy. A well-designed, responsive website helps you build credibility, connect with customers, and stand out in an increasingly competitive market. Whether you’re a startup or an established brand, having a website is crucial for digital marketing success.</p>
                    <p>Your website serves as the digital storefront for your business, providing potential customers with easy access to your services, products, and contact information 24/7. It’s also a powerful marketing tool, allowing you to track visitor behavior, improve customer engagement, and convert leads into loyal clients. With a strong web presence, you can amplify your SEO efforts, enhance brand visibility, and ensure you’re always just a click away from new opportunities.</p>

                </div>
                <div className='wd_section2_12'>
                    <img src={webd} alt="" />
                </div>
            </div>
        </section>

        <section className='wb_services'>
            <div className='wb_services1'>
                <h1 className='home_heading'>Web Development Services</h1>
                <p className='home_subheading' style={{fontWeight:"400"}}>At Innoverse Digital Solutions, we design stunning, responsive websites tailored to your business goals. Whether it’s enhancing online presence, driving user engagement, or building a strong brand identity, our web solutions deliver results that matter.</p>
            </div>
            <div className='wb_services2'>
                {services.map((e,i)=>(
                    <div className='wb_services21'>
                        <img src={e.image} alt="" />
                        <h3>{e.name}</h3>
                        <p>{e.desc}</p>
                    </div>
                ))}

            </div>

        </section>
        <section className='wd_section3'>
                <h1 className='home_heading'> Why Choose Us</h1>
                <p className='home_subheading'>At Innoverse Digital Solutions, we don’t just deliver services; we become your dedicated digital partner. Here's why businesses across Tamil Nadu and beyond trust us to elevate their digital presence:</p>
            <div className='wd_section32'>
                <div className='wd_section32_1'>
                    {chooseUs.map((e,i)=>(
                        <div key={i}> 
                            <h6>{`${i+1}.${e.title}`}</h6>
                            <p>{e.para}</p>
                        </div>
                    ))}


                </div>
                <div className='wd_section32_2'>
                        <img src={webdevep} alt="" />
                </div>
            </div>

        </section>
        <div className='wd_end'>
            <p>Let us help you transform your online presence and achieve real, measurable results with solutions that are as unique as your business. </p>
             <button>contact us</button>
        </div>
        <Footer/>
    </div>
  )
}

export default WebDevelopment