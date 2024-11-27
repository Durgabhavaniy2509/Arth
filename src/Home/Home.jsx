import React from 'react'
import './Home.css'
import CountUp from 'react-countup'

const Home = () => {
  return (
    <section>
      {/* About section */}
      <div className=" flexCenter1 paddings innerWidth hero-aboutUs">
        <div className='hero-left'>
          <img src="\Images\Aqua Raffles hotel.avif" alt="" />
        </div>
        <div className='hero-right'>
            <div className='tertiaryText'>ABOUT US</div>
            <div className='quadText hero-text'>At Arth, we are committed to revolutionizing the construction industry by <br />focusing on process efficiency and collaborative problem-solving. Our teams <br />are driven by the belief that successful projects come from well-executed plans <br /> and transparent communication. Whether working on residential, commercial, or <br /> infrastructure projects, we empower our clients with innovative, data-driven <br />solutions that ensure seamless execution from start to finish. With a global <br /> presence and a passion for excellence, Arth is redefining the construction <br />landscape, one project at a time.</div>
        </div>
      </div>

      {/* Stat section */}
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
      
      {/* How we work section */}
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
      
      {/* our customers section */}
      <div className="flexCenter1 paddings innerWidth hero-customers">
        <div className='flexColCenter hero-left gap'>
            <div className="flexCenter row">
              <div className='flexCenter customer'>Design Consultants</div>
              <div className='flexCenter customer'>BIM Managers</div>
              <div className='flexCenter customer'>General Contractors</div>
            </div>
            <div className="flexCenter row">
              <div className='flexCenter customer'>Trade Contractors</div>
              <div className='flexCenter customer'>Facility Management Teams</div>
              <div className='flexCenter customer'>Developers /Owners</div>
            </div>
        </div>
        <div className='hero-right'>
          <div className='tertiaryText'>OUR CUSTOMERS</div>
          <div className='quadText hero-text'>At Arth, we’ve had the privilege of working alongside industry leaders and visionaries. Our <br /> customers include top-tier professionals.Each of these partners values our ability to <br />implement efficient processes that mitigate risk, reduce costs, and drive project success.</div>
        </div>
      </div>
  
    <div className="paddings innerWidth testimonials">
      <div className="tertiaryText">TESTIMONIALS</div>
      <div className="tests">
        <div className='test'>
          <div className='test-symbol'>
            <span>&#39;</span><span>&#39;</span>
          </div>
          <div>"All departments and teams used to have their own information source and started over creating their own models, instead of reusing the information from other departments. With BIM we can see departments integrating, consulting each other and really collaborating. Arth has done a great job in making our process a really efficient one"</div>
          <div className='test-person'>- Gunesh Joshi, <br /> Senior Associate Director - CBRE</div>
        </div>

        <div className='test'>
          <div className='test-symbol'>
            <span>&#39;</span><span>&#39;</span>
          </div>
          <div>"The attention to detail and quality that Arth has shown is really great. It is always a pleasure working with a driven, energetic and smart team like Arth's"</div>
          <div className='test-person'>- Barclays Global <br /> Design Head</div>
        </div>

        <div className='test'>
          <div className='test-symbol'>
            <span>&#39;</span><span>&#39;</span>
          </div>
          <div>Digitizing the construction documentation and monitoring has helped the TPL team improve on-site efficiency. Quantification accuracy and progress tracking has also helped to procure JIT and eased bill verification. A Big Cheers to Arth team. We wish them the best on digitizing the Construction Industry.</div>
          <div className='test-person'>- Mridul T, <br /> Head - TATA Projects Ltd. - Quality Services division</div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Home
