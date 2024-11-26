import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <section className='h-wrapper'>
      <div className='flexCenter1 paddings innerWidth h-container'>
        <div className='h-logo'>
          <img src="\Images\Arth.webp" alt="" width={100} />
        </div>
        <div className='flexCenter h-menu'>
          <a href="">Home</a>
          <a href="">Our Firm</a>
          <a href="">Services</a>
          <a href="">Projects</a>
          <a href="">Resources</a>
          <a href="">Contact</a>
        </div>
        <div className='flexCenter h-logIn'>
            <img src="\Images\Account circle icon.svg" alt="" width={40}/> 
            <a href="">Log In</a>          
        </div>
      </div>
    </section>
  )
}

export default Header

