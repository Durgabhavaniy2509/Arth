import React from 'react'
import './OurFirm.css'
import Footer from '../Footer/Footer'

const OurFirm = () => {
  return (
    // values
    <section className='our-firm'>
      <div className='flexColCenter paddings innerWidth arth-values'>
        <div className="flexCenter arth-vandm">
          <img src="\Images\arth elements logo.avif" alt="" width={150}  className='gap'/>
          <div className='flexCenter2 vandm gap'>
            <img src="\Icons\vision.png" alt="" width={50}/>
            <p className='secondaryText'>To enable smarter and faster decisions for the built environment</p>
          </div>
          <div className='flexCenter2 vandm gap'>
            <img src="\Icons\mission.png" alt="" width={50}/>
            <p className='secondaryText'>To provide data-driven digital solutions for the built environment</p>
          </div>
        </div>

        <div className='tertiaryText flexCenter values-heading'>VALUES</div>
          <div className=" flexCenter values">
            <div className='flexColCenter hero-stat hero-pack client'>
              <img src="\Icons\teamwork.png" alt="" />
              <span className='orangeText client-proj'>
                Inclusiveness
                </span>
              <span className='primaryText client-info'>Embracing diversity ensures a rich pool of perspectives, fostering creativity and innovation in our projects.</span>
            </div>
            <div className='flexColCenter hero-stat hero-pack client'>
              <img src="\Icons\discussion.png" alt="" />
              <span className='orangeText client-proj'>
              Openness
                </span>
              <span className='primaryText client-info'>Transparent communication builds trust and encourages collaborative problem-solving, essential for our success.</span>
            </div>
            <div className='flexColCenter hero-stat hero-pack client'>
              <img src="\Icons\discipline.png" alt="" />
              <span className='orangeText client-proj'>
                Discipline
                </span>
              <span className='primaryText client-info'>Maintaining high standards and consistency in our processes leads to reliable and efficient outcomes, ensuring client satisfaction.</span>
            </div>
            <div className='flexColCenter hero-stat hero-pack client'>
              <img src="\Icons\key.png" alt="" />
              <span className='orangeText client-proj'>
              Ownership
                </span>
              <span className='primaryText client-info'>Taking responsibility empowers our team, driving accountability and pride in our work, which translates to superior results.</span>
            </div>
            <div className='flexColCenter hero-stat hero-pack client'>
              <img src="\Icons\brain.png" alt="" />
              <span className='orangeText client-proj'>
                Learnability
                </span>
              <span className='primaryText client-info'>Continuous learning and adaptability keep us at the forefront of industry advancements, ensuring sustained growth and improvement</span>
            </div>
        </div>   
      </div>
      {/* How we started */}
      <div className='flexColCenter tertiaryText'>HOW WE STARTED</div>
      <div className="timeline">
        <div className="history-container left-container">
          <img src="\Icons\rocket-lunch.png" alt="" />
          <div className="text-box">
            <small>2013</small>
            <p>Arth embarked on its journey with a clear mission: to apply proven design and build consultancy practices that bridge the gap between vision and reality</p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className="history-container right-container">
        <img src="\Icons\rocket-lunch.png" alt="" />
          <div className="text-box">
            <small>2015</small>
            <p>We began integrating cutting-edge construction technologies, setting the stage for greater innovation</p>
            <span className='right-container-arrow'></span>
          </div>
        </div>

        <div className="history-container left-container">
        <img src="\Icons\rocket-lunch.png" alt="" />
          <div className="text-box">
            <small>2016 to 2018</small>
            <p>The company expanded into Hyderabad, Bangalore, and Dubai</p>
            <span className='left-container-arrow'></span>
          </div>
        </div>


        <div className="history-container right-container">
        <img src="\Icons\rocket-lunch.png" alt="" />
          <div className="text-box">
            <small>2018</small>
            <p>The opening of our Singapore office in 2018 marked a new chapter, where we continued to enhance service excellence.</p>
            <span className='right-container-arrow'></span>
          </div>
        </div>


        <div className="history-container left-container">
        <img src="\Icons\rocket-lunch.png" alt="" />
          <div className="text-box">
            <small>2019</small>
            <p>We secured significant LTA and DfMA projects, cementing our role as a digitalization partner for modern construction</p>
            <span className='left-container-arrow'></span>
          </div>
        </div>

        <div className="history-container right-container">
        <img src="\Icons\rocket-lunch.png" alt="" />
          <div className="text-box">
            <small>2022</small>
            <p>We secured significant LTA and DfMA projects, cementing our role as a digitalization partner for modern construction</p>
            <span className='right-container-arrow'></span>
          </div>
        </div>
      </div>

      <Footer/>
    </section>
  )
}

export default OurFirm
