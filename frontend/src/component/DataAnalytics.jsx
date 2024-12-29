import React, { useEffect } from 'react'
import '../style/DataAnalytics.css'
import images from '../images/images.jpg'
import Footer from './Footer'
import Navbar from './Navbar'
import { useMyContext } from '../context/MyContext'

function DataAnalytics() {
    

   const { setIsScrolled,setSelected } = useMyContext()
   useEffect(() => {
    setSelected('data')
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
  return (
    <div>
        <Navbar/>
        <section className='wd_top_section'>
            <h1>Unlock the Power of Data Analytics for Your Business</h1>
            <p>Leverage advanced data analytics solutions to transform your business insights into actionable strategies. At Innoverse Digital Solutions, we empower you with customized analytics tools to make smarter decisions, drive growth, and achieve lasting success. Turn data into your competitive advantage today.</p>
            <span>Get Started with Data-Driven Success</span>
            <button>contact us</button>
        </section>
        <section className='da_section1'>
            <h2 className='home_heading'>Our Data Analytics Services</h2>
            <span>Transform Data into Actionable Insights</span>
            <p className='home_subheading'>At Innoverse Digital Solutions, we offer a comprehensive suite of data analytics services designed to help you make informed, data-driven decisions. Our expert team leverages advanced tools and techniques to analyze your business data, uncover trends, and provide actionable insights that drive performance. Whether you are looking to improve operational efficiency, enhance customer experiences, or optimize marketing strategies, our data analytics services are tailored to meet your unique business goals.</p>
        </section>
        

        <section className='da_section2'>
      <h2 className='home_heading'>Our Key Data Analytics Services</h2>
        
      <div className="ds-section">
      <div className="ds-content">
        <div className="ds-item">
          <h3 className="ds-heading">Business Intelligence (BI) Solutions</h3>
          <p className="ds-description">
          Unlock valuable insights with our BI tools that help you track key metrics, visualize data trends, and make smarter business decisions in real-time.  </p>
        </div>
        <div className="ds-item">
          <h3 className="ds-heading">Customer Analytics</h3>
          <p className="ds-description">
          Understand your customers better by analyzing behavioral data. We help you segment your audience and personalize marketing campaigns for improved engagement and conversion rates. </p>
        </div>
        <div className="ds-item">
          <h3 className="ds-heading">Predictive Analytics</h3>
          <p className="ds-description">
          Leverage historical data to forecast future trends and behaviors. Our predictive analytics services enable you to stay ahead of the competition by making proactive decisions.</p>
        </div>
      </div>
      <div className="ds-image-container">
        <img
          src={images}
          alt="Digital Marketing"
          className="ds-image"
        />
      </div>
    </div>

    <div className="ds-section" style={{flexDirection:"row-reverse"}}>
      <div className="ds-content">
        <div className="ds-item">
          <h3 className="ds-heading">Data Visualization</h3>
          <p className="ds-description">Make complex data more accessible with custom dashboards and visual reports. We turn raw data into easy-to-understand visual insights that help you grasp key business performance indicators.</p>
        </div>
        <div className="ds-item">
          <h3 className="ds-heading">Marketing Analytics</h3>
          <p className="ds-description"></p>Measure and optimize your digital marketing efforts with in-depth analytics. We analyze website traffic, user behavior, and campaign performance to boost ROI.
        </div>
        <div className="ds-item">
          <h3 className="ds-heading">Data Management & Integration</h3>
          <p className="ds-description">Ensure your data is clean, organized, and integrated across various platforms. We help you streamline data collection and storage for more effective analysis and decision-making.</p>
        </div>
      </div>
      <div className="ds-image-container">
        <img
          src={images}
          alt="Digital Marketing"
          className="ds-image"
        />
      </div>
    </div>

        </section>
        <section className='da_section4'>
            <h2 className='home_heading'>Why Choose Innoverse for Data Analytics?</h2>
            <p className='home_subheading'>At Innoverse Digital Solutions, we don't just analyze data — we transform it into actionable insights that drive your business forward. Our dedicated team of data analytics experts brings deep industry knowledge and a tailored approach to each project, ensuring that you get the most out of your data.</p>

        </section>


        <div className="da-container">
            <div className="da-content">
                <h2 className="da-title">
                    Here’s why you should choose us for your data analytics needs:
                </h2>
                <ol className="da-list">
                    <li>
                        <strong>Tailored Analytics Solutions</strong><br />
                        We understand that every business is unique. Our data analytics services are customized to meet your specific needs, ensuring you receive insights that are relevant and impactful for your business goals.
                    </li>
                    <li>
                        <strong>Proven Expertise & Cutting-Edge Tools</strong><br />
                        Our team uses the latest analytics tools and technologies to deliver precise, reliable insights. We stay ahead of industry trends and use best practices to ensure your business stays competitive in the digital landscape.
                    </li>
                    <li>
                        <strong>Data-Driven Decision Making</strong><br />
                        We empower your business to make informed, data-driven decisions that enhance performance, optimize strategies, and foster growth. With our insights, you can make proactive decisions rather than reactive ones.
                    </li>
                    <li>
                        <strong>Comprehensive Reporting & Visualization</strong><br />
                        We provide easy-to-understand reports and visualizations that help you grasp complex data quickly. Our intuitive dashboards ensure that key performance metrics are always at your fingertips.
                    </li>
                    <li>
                        <strong>Scalable & Flexible Services</strong><br />
                        Whether you're a small startup or an established enterprise, our data analytics services are scalable and flexible, adapting to your evolving needs as your business grows.
                    </li>
                    <li>
                        <strong>Results-Oriented Approach</strong><br />
                        Our ultimate goal is to drive measurable results. We work closely with you to ensure that our data insights translate into tangible improvements in business outcomes, whether it’s increasing ROI, optimizing marketing strategies, or improving customer engagement.
                    </li>
                </ol>
            </div>
            <div className="da-image-container">
                <img src={images} alt="Data Analytics" className="da-image"/>
            </div>
        </div>

        <div className="das-container">
            <h2 className="das-title">
                Ready to Unlock the Full Potential of Your Data?
            </h2>
            <p className="das-subtitle">
                Partner with Innoverse Digital Solutions and make data work for your business.
            </p>
            <p className="das-highlight">
                <strong>Get in touch today to explore how our analytics solutions can drive growth and success for your business.</strong>
            </p>
            <button className="das-button">
                Get started
            </button>
        </div>
        <Footer/>



    </div>
  )
}

export default DataAnalytics