import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section>
      <div>
      <div className=' flexCenter hero-stats'>
          <div className='flexColCenter hero-stat'>
            <img src="\Icons\completed-task.png" alt="" />
            <span className='orangeText'>300+</span>
            <span className='primaryText'>Projects Completed</span>
          </div>
          <div className='flexColCenter hero-stat '>
            <img src="\Icons\rating.png" alt="" />
            <span className='orangeText'>300+</span>
            <span className='primaryText'>Experts</span>
          </div>
          <div className='flexColCenter hero-stat'>
            <img src="\Icons\countries.png" alt="" />
            <span className='orangeText'>7</span>
            <span className='primaryText'>Countries</span>
          </div>
  
      </div>
      </div>
    </section>
  )
}

export default Home
