import React from 'react'
import './OurFirm.css'

const OurFirm = () => {
  return (
    // values
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
              <span className='primaryText client-info'>Continuous learning and adaptability keep us at the forefront of industry advancements, ensuring sustained growth and improvement.</span>
            </div>
        </div>


    </div>
  )
}

export default OurFirm
