import React from 'react'
import './OurFirm.css'
import Footer from '../Footer/Footer'
import { Members } from '../OurFirmComponents/Teamdata'
import { MemberCard } from '../OurFirmComponents/Team'
import Journey from '../OurFirmComponents/Journey'
import '../OurFirmComponents/Team.css'
import '../Home/Home.css'
import Swiper2 from '../OurFirmComponents/Arth.jsx'
import { motion, useMotionValue, animate, useTransform, useInView } from "motion/react";

const OurFirm = () => {
  const cardReveal = {
    hidden: { 
      y: 50,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    }
  };
  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  return (
    // values
    <section className='our-firm'>
      <Swiper2/>
      <div className='flexColCenter2 innerWidth arth-values'>
        <div className=' flexColCenter1 paddings values-heading'>
          <motion.div variants={imageVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='tertiaryText'>OUR CORE VALUES</motion.div>
            <motion.div variants={fadeIn} initial="hidden"
            whileInView='visible' viewport = { {once: true }} className='quadText'>The principles that guide our journey and shape our culture</motion.div>
        </div>
        
          {/* <div className=" flexCenter values"> */}
          <div className="wrapper values">
            <motion.div variants={cardReveal} initial="hidden"
            whileInView="visible" viewport = { {once: true }}  className='flexColCenter1 hero-stat values-pack client each-value'>
              <img src="\Icons\teamwork.png" alt="" />
              <span className='orangeText client-proj'>
                Inclusiveness
                </span>
              <span className='primaryText client-info'>Embracing diversity ensures a rich pool of perspectives, fostering creativity and innovation in our projects.</span>
            </motion.div>
            <motion.div variants={cardReveal} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='flexColCenter1 hero-stat values-pack client'>
              <img src="\Icons\discussion.png" alt="" />
              <span className='orangeText client-proj'>
              Openness
                </span>
              <span className='primaryText client-info'>Transparent communication builds trust and encourages collaborative problem-solving, essential for our success.</span>
            </motion.div>
            <motion.div variants={cardReveal} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='flexColCenter1 hero-stat values-pack client'>
              <img src="\Icons\discipline.png" alt="" />
              <span className='orangeText client-proj'>
                Discipline
                </span>
              <span className='primaryText client-info'>Maintaining high standards and consistency in our processes leads to reliable and efficient outcomes, ensuring client satisfaction.</span>
            </motion.div>
            <motion.div variants={cardReveal} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='flexColCenter1 hero-stat values-pack client'>
              <img src="\Icons\key.png" alt="" />
              <span className='orangeText client-proj'>
              Ownership
                </span>
              <span className='primaryText client-info'>Taking responsibility empowers our team, driving accountability and pride in our work, which translates to superior results.</span>
            </motion.div>
            <motion.div variants={cardReveal} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='flexColCenter1 hero-stat values-pack client'>
              <img src="\Icons\brain.png" alt="" />
              <span className='orangeText client-proj'>
                Learnability
                </span>
              <span className='primaryText client-info'>Continuous learning and adaptability keep us at the forefront of industry advancements, ensuring sustained growth and improvement</span>
            </motion.div>
        </div>   
      </div>
      {/* How we started */}
      <div className='flexColCenter1'>
        <motion.div variants={imageVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='tertiaryText journey-section'>OUR JOURNEY</motion.div>
        <div className='flexColCenter1' ><Journey/></div>
      </div>
      

      {/* Management section */}
       <section className="management-section">
        <div className="container-management">
          <div className="section-header">
            <motion.div variants={imageVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className="section-title tertiaryText">OUR LEADERSHIP TEAM</motion.div>
            <motion.div variants={fadeIn} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className="section-description quadText">
              Meet the visionaries behind our success. Our leadership team brings together
              decades of experience and a shared commitment to excellence.
            </motion.div>
          </div>
          
          <div className="members-grid">
            {Members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section> 
      <Footer/>
    </section>
  )
}

export default OurFirm
