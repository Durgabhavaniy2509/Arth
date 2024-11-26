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
            <div className='tertiaryText'>ABOUT US</div>
            <div className='quadText hero-text'>At Arth, we are committed to revolutionizing the construction industry by <br />focusing on process efficiency and collaborative problem-solving. Our teams <br />are driven by the belief that successful projects come from well-executed plans <br /> and transparent communication. Whether working on residential, commercial, or <br /> infrastructure projects, we empower our clients with innovative, data-driven <br />solutions that ensure seamless execution from start to finish. With a global <br /> presence and a passion for excellence, Arth is redefining the construction <br />landscape, one project at a time.</div>
        </div>
      </div>

      <div className = 'flexCenter hero-stats'>
          <div className = 'flexColCenter hero-stat'>
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

       <div className="flexCenter1 paddings innerWidth hero-work">
        <div className='hero-left'>
          <div className='tertiaryText'>HOW WE WORK</div>
          <div className='quadText hero-text'>Our teams enable you to unlock project success through well-established processes that <br /> emphasize collaboration and foresight. At Arth, we proactively manage every phase of the project <br /> by integrating our deep technical knowledge with modern tools and technologies. From early <br /> design validation to IoT integrations, our team facilitates seamless communication between all <br />stakeholders, ensuring everyone is aligned. With us, you won’t just see results—you’ll experience <br /> a process that ensures continued efficiency and value, even beyond construction.</div>
        </div>
        <div className='hero-right'>
          <div className='flexCenter row'>
            <div className='flexColCenter hero-pack'>
              <img src="\Icons\Conceptualize.png" alt="" />
              <span className='quadText'>Conceptualize</span>
            </div>
            <div className='flexColCenter hero-pack'>
              <img src="\Icons\Exploring Ideas.png" alt="" />
              <span className='quadText'>Exploring Ideas</span>
            </div>
          </div>
          <div className='flexCenter row'>
            <div className='flexColCenter hero-pack1'>
              <img src="\Icons\Integration.png" alt="" />
              <span className='quadText'>Integration</span>
            </div>
            <div className='flexColCenter hero-pack'>
              <img src="\Icons\Implementation.png" alt="" />
              <span className='quadText'>Implementation</span>
            </div>
          </div>
        </div>
       </div>


    </section>
  )
}

export default Home
