import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const Header = () => {
  return (
    <section className='h-wrapper'>
      <div className='flexCenter1 paddings innerWidth h-container'>
        <div className='h-logo'>
          <img src="\Images\Arth.webp" alt="" width={100} />
        </div>
        <div className='flexCenter h-menu'>
          <Link to='./Home'>Home</Link>
          <Link to='./OurFirm'>Our Firm</Link>
          <Link to='./Services'>Services</Link>
          <Link to='./Projects'>Projects</Link>
          <Link to='./Resources'>Resources</Link>
          <Link to='./Contact'>Contact</Link>
        </div>
        <div className='flexCenter h-logIn'>
            <img src="\Images\Account circle icon.svg" alt="" width={40}/> 
            <Link to='./LogIn'>Log In</Link>         
        </div>
      </div>
    </section>
  )
}

export default Header

