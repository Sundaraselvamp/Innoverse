import React, { useEffect } from 'react'
import '../style/DigitalMarketing.css'
import images from '../images/images.jpg'
import Footer from './Footer'
import Navbar from './Navbar'
import { useMyContext } from '../context/MyContext'

function DigitalMarketing() {
  const { setIsScrolled, setSelected } = useMyContext()
  useEffect(() => {
    setSelected('digital')
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


  const chooseUs = [
    {
      title: "Increased Reach",
      para: "With digital marketing, you can connect with a global audience. Whether through social media, search engines, or email campaigns, you can engage with potential customers anywhere, at any time."
    },
    {
      title: "Targeted Advertising",
      para: "Digital marketing allows you to target specific demographics based on location, age, interests, and more. This ensures that your marketing efforts reach the right audience, maximizing ROI."
    },
    {
      title: "Cost-Effective",
      para: "Compared to traditional marketing, digital marketing is much more budget-friendly. You can reach a larger audience without breaking the bank, making it an ideal option for businesses of all sizes."
    }, {
      title: "Measurable Results",
      para: "With digital marketing, you can track and analyze the performance of your campaigns in real-time. This allows you to make data-driven decisions and adjust strategies for optimal results."
    }, {
      title: "Build Brand Credibility",
      para: "A strong digital presence helps build trust and credibility with your audience. By providing valuable content, engaging on social media, and showcasing customer testimonials, you can position your brand as an authority in your industry."
    }, {
      title: "Improved Engagement",
      para: "Digital marketing enables two-way communication with your audience. Whether it’s responding to inquiries on social media or interacting with customers via email, building relationships becomes easier and more personal."
    }, {
      title: "Stay Competitive",
      para: "As more businesses move online, digital marketing is becoming a necessity to stay competitive. Without a digital strategy, you risk being left behind in an increasingly crowded marketplace."
    },
  ]
  return (
    <div>
      <Navbar />
      <section className='wd_top_section'>
        <h1>Supercharge Your Business Growth with Expert Digital Marketing Solutions</h1>
        <p>Transform your digital presence with Innoverse Digital Solutions. Our tailored strategies in SEO, social media marketing, PPC, and more are designed to help your business thrive online. Whether you want to boost your search engine rankings, engage with your audience on social platforms, or drive targeted traffic through paid ads, we create impactful solutions that deliver measurable results. Let us help you turn clicks into loyal customers and drive consistent growth for your business.</p>
        <button>contact us</button>
      </section>
      <section className='dm_section2'>
        <div className='dm_section21'>
          <h2 className='home_heading'>Why Digital Marketing Matters for Your Business</h2>
          <p className='home_subheading' style={{ marginTop: "1.5rem" }}>In today’s digital-first world, traditional marketing methods alone are no longer enough to drive sustainable growth. Digital marketing offers businesses a powerful, cost-effective way to reach their target audience, build brand awareness, and generate valuable leads. Whether you’re a small startup or an established brand, having a digital marketing strategy is crucial for staying competitive and relevant.

          </p>
        </div>
        <p>Here’s why digital marketing is essential for your business

        </p>
        {chooseUs.map((e, i) => (
          <div className='dm_section22'>
            <h2>{`${i + 1}.${e.title}`}</h2>
            <p>{e.para}</p>
          </div>
        ))}
      </section>
      <section className='dm_section3'>
        <h2 className='home_heading'>Digital Marketing Services</h2>
        <p className='home_newhead'>Boost Your Online Presence with Customized Strategies</p>
        <p className='home_subheading'>At Innoverse Digital Solutions, we create tailored digital marketing strategies to help you grow your brand and connect with your audience. From SEO and social media management to paid advertising, our expert team ensures your business stands out and drives measurable results.</p>

        <div className="ds-section">
          <div className="ds-content">
            <div className="ds-item">
              <h3 className="ds-heading">Search Visibility → Search Engine Optimization (SEO)</h3>
              <p className="ds-description">
                Boost your website's visibility with proven SEO strategies. Our experts help your business rank higher,
                drive targeted traffic, and convert visitors into loyal customers. Let us help you dominate search results today.
              </p>
            </div>
            <div className="ds-item">
              <h3 className="ds-heading">Social Media Engagement → Social Media Marketing (SMM)</h3>
              <p className="ds-description">
                Engage your audience with creative, tailored social media campaigns. We build your brand's presence on platforms
                like Instagram, Facebook, and LinkedIn to drive awareness and foster lasting growth.
              </p>
            </div>
            <div className="ds-item">
              <h3 className="ds-heading">Lead Generation → Pay-Per-Click Advertising (PPC)</h3>
              <p className="ds-description">
                Attract the right audience and get faster results with data-driven PPC campaigns. Our strategies maximize your ROI
                by turning clicks into loyal customers and delivering measurable outcomes.
              </p>
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

        <div className="ds-section" style={{ flexDirection: "row-reverse" }}>
          <div className="ds-content">
            <div className="ds-item">
              <h3 className="ds-heading">Website Optimization → Website Design and Development</h3>
              <p className="ds-description">
                Stand out online with stunning, mobile-friendly websites that are fast, secure, and designed to convert visitors. Elevate your online presence with our expert development services, tailored to your needs.</p>
            </div>
            <div className="ds-item">
              <h3 className="ds-heading">Online Growth Strategy → Digital Marketing Strategy</h3>
              <p className="ds-description">
                Achieve your business goals with customized digital marketing strategies. From planning to execution, we create a roadmap to drive your online growth and position your brand for success.</p>
            </div>
            <div className="ds-item">
              <h3 className="ds-heading">Performance Tracking → Analytics and Reporting</h3>
              <p className="ds-description">
                Track your progress with detailed performance analytics. We provide actionable insights to optimize campaigns and ensure you're achieving the best possible results for your business.</p>
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
      <section className="dms-section-container">
        <div className="dms-content">
          <h1 className="dms-heading">Your Trusted Digital Marketing Partner</h1>
          <p className="dms-description">
            At Innoverse, we specialize in delivering custom digital marketing
            solutions tailored to your business goals. From SEO to PPC and social
            media marketing, our expertise ensures your brand stands out in a
            crowded marketplace.
          </p>
          <h2 className="dms-subheading">Why Choose Us?</h2>
          <ul className="dms-key-points">
            <li>
              <strong>Proven Results:</strong> Our clients experience up to a 30% increase in
              website traffic and lead generation.
            </li>
            <li>
              <strong>Tailored Strategies:</strong> Every business is unique, so we craft
              strategies customized to your needs.
            </li>
            <li>
              <strong>End-to-End Services:</strong> From creating campaigns to tracking
              performance, we handle everything so you can focus on growth.
            </li>
            <li>
              <strong>Local Expertise:</strong> As a trusted digital marketing partner in
              Tamil Nadu, we understand the local market and audience.
            </li>
          </ul>
          
           </div>
           
        <div className="dms-image-container">
          <img
            src={images}
            alt="Decorative"
            className="dms-decorative-image"
          />
        </div>
        <div>
          
        </div>
      </section>
      <div className='dm_end1'>
      <p className="dms-cta-text">
            Choose Innoverse to elevate your brand, boost your online presence,
            and achieve measurable results.
          </p>
      <p className="dms-cta-text-bold">
            Let’s grow your business together—starting today!
          </p>
          <button className="dms-contact-button">Contact us!</button>
       
      </div>
      <Footer />
    </div>
  )
}

export default DigitalMarketing