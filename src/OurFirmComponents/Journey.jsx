import React from "react";
import './Journey.css';
import { Flag, Globe, MapPinned, Rocket, SignpostBig, Trophy } from 'lucide-react';
import { motion} from 'framer-motion';

const Journey = () => {

  const timeVariant = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };
   const timeVariant2 = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    
   };
   const timeVariant3 = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
   };

  return (
    
  <motion.div variants={timeVariant} initial='hidden' whileInView='visible' viewport={{once: true}}
  className="timeline">
    <motion.div  variants={timeVariant2}
    initial='hidden' whileInView='visible' viewport={{once: true}}
    className="container left ">
      <div className="date">2013</div>
      <span className='icon'><Flag/></span>
      <div className="content">
        <p>
        Arth embarked on its journey with a clear mission: to apply proven design and build consultancy practices that bridge the gap between vision and reality
        </p>
      </div>
    </motion.div >
    <motion.div   variants={timeVariant3}
    initial='hidden' whileInView='visible' viewport={{once: true}}
    className="container right">
      <div  className="date">2015</div>
      <span className='icon'><Rocket/></span>
      <div className="content">
        <p>
          We began integrating cutting-edge construction technologies, setting the stage for greater innovation
        </p>
      </div>
    </motion.div >
    <motion.div   variants={timeVariant2}
    initial='hidden' whileInView='visible' viewport={{once: true}}
    className="container left">
      <div className="date">2016</div>
      <span className='icon'><SignpostBig/></span>
      <div className="content">
        <p>
          The company expanded into Hyderabad, Bangalore, and Dubai
        </p>
      </div>
    </motion.div >
    <motion.div   variants={timeVariant3}
    initial='hidden' whileInView='visible' viewport={{once: true}}
    className="container right">
      <div className="date">2018</div>
      <span className='icon'><MapPinned/></span>
      <div className="content">
        <p>
          The opening of our Singapore office in 2018 marked a new chapter, where we continued to enhance service excellence.
        </p>
      </div>
    </motion.div >
    <motion.div variants={timeVariant2}
    initial='hidden' whileInView='visible' viewport={{once: true}}
    className="container left">
      <div className="date">2019</div>
      <span className='icon'><Trophy/></span>
      <div className="content">
        <p>
          We secured significant LTA and DfMA projects, cementing our role as a digitalization partner for modern construction
        </p>
      </div>
    </motion.div >

    <motion.div  variants={timeVariant3}
    initial='hidden' whileInView='visible' viewport={{once: true}}
    className="container right">
      <div className="date">2022</div>
      <span className='icon'><Globe/></span>
      <div className="content">
        <p>
          We expanded into the US market, continuing our pursuit of innovation with advanced technological offerings
        </p>
      </div>
    </motion.div>
</motion.div>
  )
}

export default Journey
