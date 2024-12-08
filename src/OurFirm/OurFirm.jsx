import React from 'react'
import './OurFirm.css'
import Footer from '../Footer/Footer'
import { Members } from '../OurFirmComponents/Teamdata'
import { MemberCard } from '../OurFirmComponents/Team'
import Journey from '../OurFirmComponents/Journey'
import '../OurFirmComponents/Team.css'

const OurFirm = () => {
  return (
    // values
    <section className='our-firm'>
      <div className='flexColCenter1 paddings innerWidth arth-values'>
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

        <div className=' flexColCenter1 values-heading'>
          <div className='tertiaryText'>OUR CORE VALUES</div>
            <p className='primaryText'>The principles that guide our journey and shape our culture</p>
        </div>
        
          <div className=" flexCenter values">
            <div className='flexColCenter hero-stat hero-pack client each-value'>
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
      <div className='flexColCenter1'>
        <div className='tertiaryText journey-section'>HOW WE STARTED</div>
        <div className='flexColCenter1' ><Journey/></div>
      </div>
      

      {/* Management section */}
       <section className="management-section">
        <div className="container-management">
          <div className="section-header">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-description">
              Meet the visionaries behind our success. Our leadership team brings together
              decades of experience and a shared commitment to excellence.
            </p>
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
