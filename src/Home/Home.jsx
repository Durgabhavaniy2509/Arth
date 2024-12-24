import React from 'react'
import './Home.css'
// import CountUp from 'react-countup'
import Arth from '../../Video/Arth.mp4';
import { useState, useRef, useEffect } from 'react';
import Footer from '../Footer/Footer';
import { motion, useMotionValue, animate, useTransform, useInView } from "motion/react";
// import { time } from 'motion';

const Home = () => {
  // const [videoSrc, setVideoSrc] = useState("Arth.mp4");
  const videoRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(false); 
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); 
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
  const headingVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
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

  const imgVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const videoVariants = {
    animate: {
      y: [0, 15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  // Stagger container variant
  //  const container = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2
  //     }
  //   }
  // };

  // Card reveal variant
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
  
  //count up
  const ref = useRef(null); // Reference to the element
  const isInView = useInView(ref, { once: true, threshold: 0.5 });
  const isInView1 = useInView(ref, { once: true, threshold: 0.5 });  // Trigger animation only once
  const count = useMotionValue(250);
  const count1 = useMotionValue(3);
  const roundedCount = useTransform(count, (value) => Math.round(value));
  const roundedCount1 = useTransform(count1, (value) => Math.round(value));
  

  useEffect(() => {
    if (isInView) {
      animate(count, 300, { duration: 2.5 });
    }
  }, [isInView, count]);

  useEffect(() => {
    if (isInView) {
      animate(count1, 7, { duration: 2 });
    }
  }, [isInView1, count1]);


  return (
    <section className='home'>
      {/* main section */}
      <div className='flexCenter1 paddings innerWidth about-arth'>
        <div className="primaryText video-info">
          {/* <div className="vision">To enable smarter and faster decisions for the built environment</div> */}
          {/* <motion.div
        className="primaryText video-info"
        initial={{ opacity: 0, y: 50 }} // Start from invisible and moved down
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
        viewport={{ once: true }} // Trigger animation once on scroll
      > */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            animate='visible'
            // animate= 'visible'
           className="hero-left awesomeText main-head bold">PIONEERING <br />
              TECHNOLOGY IN <br />CONSTRUCTION</motion.div>
          {/* <div className="mission">
            To provide data-driven digital solutions for the built environment.
          </div> */}
          {/* </motion.div> */}
          
        </div>
        {/* <div className="hero-left primaryText main-head">PIONEERING <br />
              TECHNOLOGY IN <br />CONSTRUCTION</div> */}
        <motion.div
          variants={videoVariants}
          animate="animate"
          className='video-container'>
          <video ref={videoRef} className="video" width="650" onClick={handlePlayPause}>
          <source src={Arth} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        {!isPlaying && (
          <button className="play-button" onClick={handlePlayPause}>
            ▶
          </button>
        )}
        </motion.div>
      </div>
      {/* About section */}
      <div className=" flexCenter2 paddings innerWidth aboutUs arth">
        <div className='hero-left arth-left'>
          <motion.img variants={imageVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }}
            src="/Images/Aqua Raffles hotel.avif" alt=""  className='building'/>
        </div>
        <div className='hero-right flexCenter2 arth-right'>
            <motion.div 
            variants={imageVariants} initial="hidden" whileInView='visible' viewport={{once: true}}
            className='tertiaryText'>ABOUT US</motion.div>
            <motion.div 
            variants={fadeIn} initial="hidden"
            whileInView='visible' viewport = { {once: true }}
            className='quadText hero-text'>At Arth, we are committed to revolutionizing the construction industry by focusing on process efficiency and collaborative problem-solving. Our teams are driven by the belief that successful projects come from well-executed plans and transparent communication. Whether working on residential, commercial, or infrastructure projects, we empower our clients with innovative, data-driven solutions that ensure seamless execution from start to finish. With a global presence and a passion for excellence, Arth is redefining the construction landscape, one project at a time.</motion.div> 
        </div>
      </div>

      {/* Stat section */}
      <div className = 'flexCenter6 hero-stats'>
          <div className = 'flexColCenter3 hero-stat'>
            <img src="/Icons/completed-task.png" alt="" />
            <div className='orangeText special-1 flexCenter3'>
            <motion.span variants={fadeIn} ref={ref}>{roundedCount}
            </motion.span>
            <p>+</p>
            </div>
              {/* <CountUp start= {250} end= {300} duration={3}/>+ */}
    
            <span className='primaryText bold special-2'>Projects</span>
          </div>
          <div className='flexColCenter3 hero-stat '>
            <img src="/Icons/rating.png" alt="" />
            <div className='orangeText special-1 flexCenter3'>
            <motion.span variants={fadeIn} ref={ref}>{roundedCount}
            </motion.span>
            <p>+</p>
            </div>
            <span className='primaryText bold special-2'>Experts</span>
          </div>
          <div className='flexColCenter3 hero-stat'>
            <img src="/Icons/countries.png" alt="" />
            <div className='orangeText special-1 flexCenter3'>
            <motion.span variants={fadeIn} ref={ref}>{roundedCount1}
            </motion.span>
            </div>
            <span className='primaryText bold special-2'>Countries</span>
          </div>
       </div>
      
      {/* Client segments */}
      <div className="flexCenter2 paddings innerWidth about-clients">
        <div className=" flexCenter2 mid-left">
        <motion.div variants={imageVariants} initial="hidden"
            whileInView='visible' viewport = { {once: true }}
        className='tertiaryText'>CLIENT SEGMENTS</motion.div>
        <motion.div variants={fadeIn} initial="hidden"
            whileInView='visible' viewport = { {once: true }}className='quadText'>At Arth, we work across a variety of sectors, ensuring that our expertise and processes drive success in each. Our core client segments include:</motion.div>
        </div>
        <div className='client-right'>
          <motion
             className="client-segments">
            <motion.div variants={cardReveal} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='flexColCenter1 hero-stat hero-pack client'>
              <img src="/Icons/train.png" alt="" />
              <span className='orangeText client-proj'>
                Infrastructure
                </span>
              <span className='primaryText client-info'>Delivering large-scale projects like bridges, roads, metro stations, tunnels and utilities with precision and efficiency.</span>
            </motion.div>
            <motion.div variants={cardReveal} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='flexColCenter1 hero-stat hero-pack client'>
              <img src="/Icons/apartment.png" alt="" />
              <span className='orangeText client-proj'>
                High Rise Residential
                </span>
              <span className='primaryText client-info'>Streamlining complex residential developments to ensure timely and high-quality completion.</span>
            </motion.div>
            <motion.div variants={cardReveal} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='flexColCenter1 hero-stat hero-pack client'>
              <img src="/Icons/airport.png" alt="" />
              <span className='orangeText client-proj'>
                Airports
                </span>
              <span className='primaryText client-info'>Managing the complexities of airport projects, from construction and expansion to ensuring long-term operational efficiency and upkeep.</span>
            </motion.div>

            <motion.div variants={cardReveal} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='flexColCenter1 hero-stat hero-pack client'>
              <img src="/Icons/factory.png" alt="" />
              <span className='orangeText client-proj'>
                Commercial
                </span>
              <span className='primaryText client-info'>Providing comprehensive support throughout the lifecycle of office spaces, retail centers, and mixed-use developments, from construction to long-term maintenance and management.</span>
            </motion.div>
            <motion.div variants={cardReveal} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='flexColCenter1 hero-stat hero-pack client'>
              <img src="/Icons/hospital.png" alt="" />
              <span className='orangeText client-proj'>
                Health & Recreational
                </span>
              <span className='primaryText client-info'>Ensuring that hospitals, nursing homes, polyclinics, and recreational facilities meet modern standards for functionality and safety.</span>
            </motion.div>
            <motion.div variants={cardReveal} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='flexColCenter1 hero-stat hero-pack client'>
              <img src="/Icons/electric-factory.png" alt="" />
              <span className='orangeText client-proj'>
                Plants & Sub-stations
                </span>
              <span className='primaryText client-info'>Supporting critical infrastructure projects, ensuring that plants and energy substations are built and maintained to the highest standards, safeguarding long-term reliability and operational continuity.</span>
            </motion.div>
            </motion>
        </div>
      </div>
      {/* How we work section */}
       <div className="flexCenter1 paddings1 innerWidth hero-work">
        <div className='work-left'>
          <motion.div variants={imageVariants} initial="hidden" whileInView='visible' viewport={{once: true}} className='tertiaryText work-heading'>HOW WE WORK</motion.div>
          <motion.div variants={fadeIn}
            initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='quadText hero-text'>Our teams enable you to unlock project success through well-established processes that emphasize collaboration and foresight. At Arth, we proactively manage every phase of the project by integrating our deep technical knowledge with modern tools and technologies. From early design validation to IoT integrations, our team facilitates seamless communication between all stakeholders, ensuring everyone is aligned. With us, you won’t just see results—you’ll experience a process that ensures continued efficiency and value, even beyond construction.</motion.div>
        </div>
        {/* <div className='quadText hero-text'>Our teams enable you to unlock project success through well-established processes that <br /> emphasize collaboration and foresight. At Arth, we proactively manage every phase of the project <br /> by integrating our deep technical knowledge with modern tools and technologies. From early <br /> design validation to IoT integrations, our team facilitates seamless communication between all <br />stakeholders, ensuring everyone is aligned. With us, you won’t just see results—you’ll experience <br /> a process that ensures continued efficiency and value, even beyond construction.</div>
        </div> */}
        <div className='work-right'>
            <div className='flexColCenter3 work-pack'>
              <motion.img variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} src="/Icons/Conceptualize.png" alt="" width={35}/>
              <motion.span variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='imgText'>Conceptualize</motion.span>
            </div>
            <div className='flexColCenter3 work-pack'>
              <motion.img variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} src="/Icons/Exploring Ideas.png" alt="" width={35}/>
              <motion.span variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='imgText'>Exploring Ideas</motion.span>
            </div>
            <div className='flexColCenter3 work-pack'>
              <motion.img variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} src="/Icons/Integration.png" alt="" width={35}/>
              <motion.span variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='imgText'>Integration</motion.span>
            </div>
            <div className='flexColCenter3 work-pack'>
              <motion.img variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} src="/Icons/Implementation.png" alt="" width={35}/>
              <motion.span variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='imgText'>Implementation</motion.span>
            </div>
        </div>
      </div>


      <div className="flexCenter1 paddings innerWidth hero-work">
        <div className='work-left'>
          <motion.div variants={imageVariants} initial="hidden" whileInView='visible' viewport={{once: true}} className='tertiaryText small-size'>OUR CLIENT SEGMENTS</motion.div>
        </div>
        <div className='customer-pack'>
              <motion.div variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='imgText customer '>Design Consultants</motion.div>
              <motion.div variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='imgText customer'>BIM Managers</motion.div>
              <motion.div variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='imgText customer'>General Contractors</motion.div>
              <motion.div variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='imgText customer'>Trade Contractors</motion.div>
              <motion.div variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='imgText customer'>Facility Management Teams</motion.div>
              <motion.div variants={imgVariants} initial="hidden"
            whileInView="visible" viewport = { {once: true }} className='imgText customer'>Developers /Owners</motion.div>
        </div>
        <div className='hero-right'>
        <motion.div variants={imageVariants} initial="hidden" whileInView='visible' viewport={{once: true}} className='tertiaryText big-size'>OUR CLIENT SEGMENTS</motion.div>
          < motion.div variants={fadeIn} initial="hidden" whileInView='visible' viewport={{once: true}} className='quadText hero-text'>At Arth, we’ve had the privilege of working alongside industry leaders and visionaries. Our customers include top-tier professionals.Each of these partners values our ability to implement efficient processes that mitigate risk, reduce costs, and drive project success.</motion.div>
        </div>
      </div>
    
  
    <div className="flexCenter">
      <motion.div variants={imageVariants} initial="hidden" whileInView='visible' viewport={{once: true}} className="tertiaryText">WHAT OUR CLIENTS SAY</motion.div>
    </div>
     <div className="paddings1 innerWidth testimonials">
      <div className="tests">
        <motion.div variants={cardReveal} initial="hidden"
          whileInView="visible" viewport = { {once: true }} className='test'>
          <div className='quote-icon'>
            <img src="/Icons/quote.png" alt="" width={30}/>
          </div>
          <div className='imgText'>All departments and teams used to have their own information source and started over creating their own models, instead of reusing the information from other departments. With BIM we can see departments integrating, consulting each other and really collaborating. Arth has done a great job in making our process a really efficient one.</div>
          <div className='imgText text-bold test-person'>- Gunesh Joshi, <br /> Senior Associate Director - CBRE</div>
        </motion.div>

        <motion.div variants={cardReveal} initial="hidden"
          whileInView="visible" viewport = { {once: true }}
          className='test'>
          <div className='quote-icon'>
            <img src="/Icons/quote.png" alt="" width={30}/>
          </div>
          <div className='imgText'>The attention to detail and quality that Arth has shown is really great. It is always a pleasure working with a driven, energetic and smart team like Arth's.</div>
          <div className='imgText text-bold test-person'>- Barclays Global <br /> Design Head</div>
        </motion.div>

        <motion.div 
          variants={cardReveal} initial="hidden"
          whileInView="visible" viewport = { {once: true }}
          className='test'>
          <div className='quote-icon'>
            <img src="/Icons/quote.png" alt="" width={30}/>
          </div>
          <div className='imgText'>Digitizing the construction documentation and monitoring has helped the TPL team improve on-site efficiency. Quantification accuracy and progress tracking has also helped to procure JIT and eased bill verification. A Big Cheers to Arth team. We wish them the best on digitizing the Construction Industry.</div>
          <div className='imgText text-bold test-person'>- Mridul T, <br /> Head - TATA Projects Ltd. - Quality Services division</div>
        </motion.div>
      </div>
    </div>
    <Footer/>
    </section>
  )
}

export default Home
