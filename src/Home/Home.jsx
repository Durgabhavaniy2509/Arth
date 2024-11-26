import React from 'react'
import './Home.css'
import CountUp from 'react-countup'

const Home = () => {
  return (
    <section>
      <div className=" flexCenter1 paddings innerWidth hero-aboutUs">
        <div className='hero-left'>
          <img src="\Images\Aqua Raffles hotel.avif" alt="" />
        </div>
        <div className='hero-right'>
            <div>ABOUT US</div>
            <div>At Arth, we are committed to revolutionizing the construction industry by <br />focusing on process efficiency and collaborative problem-solving. Our teams <br />are driven by the belief that successful projects come from well-executed plans <br /> and transparent communication. Whether working on residential, commercial, or <br /> infrastructure projects, we empower our clients with innovative, data-driven <br />solutions that ensure seamless execution from start to finish. With a global <br /> presence and a passion for excellence, Arth is redefining the construction <br />landscape, one project at a time.</div>
        </div>
      </div>

      <div className=' flexCenter hero-stats'>
          <div className='flexColCenter hero-stat'>
            <img src="\Icons\completed-task.png" alt="" />
            <span className='orangeText'>
              <CountUp start= {250} end= {300} duration={3}/>+
            </span>
            <span className='primaryText'>Projects Completed</span>
          </div>
          <div className='flexColCenter hero-stat '>
            <img src="\Icons\rating.png" alt="" />
            <span className='orangeText'>
              <CountUp start= {250} end= {300} duration={3}/>+
              </span>
            <span className='primaryText'>Experts</span>
          </div>
          <div className='flexColCenter hero-stat'>
            <img src="\Icons\countries.png" alt="" />
            <span className='orangeText'>
              <CountUp start= {3} end= {7} duration={3}/>
            </span>
            <span className='primaryText'>Countries</span>
          </div>
       </div>
    </section>
  )
}

export default Home
