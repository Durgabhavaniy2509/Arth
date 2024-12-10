import React from 'react'
import { Component } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import { AlignJustify, X } from 'lucide-react';

const Header = () => {
  var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
  return (
    <nav class="nav">
        <div class="navbar-container">
            <div class="logo">
                <a href="#">YourLogo</a>
            </div>
            <div class="main_list" id="mainListDiv">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">my work</a></li>
                    <li><a href="#">disegn</a></li>
                    <li><a href="#">dcontact</a></li>
                </ul>
            </div>
            <div class="media_button">
                <button class="main_media_button" id="mediaButton">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
      </nav>
  )
}

export default Header


      // <nav className='h-wrapper'>
      //   <div className='flexCenter1 paddings innerWidth h-container'>
      //     <div className='h-logo'>
      //       < img src="\Images\Arth.webp" alt="" width={100} />
      //     </div>
      //     <div className='flexCenter h-menu'>
      //       <Link to='./Home' className='active'>Home</Link>
      //       <Link to='./OurFirm' >Our Firm</Link>
      //       <Link to='./Services' >Services</Link>
      //       <Link to='./Projects' >Projects</Link>
      //       <Link to='./Resources' >Resources</Link>
      //       <Link to='./Contact' >Contact</Link>
      //     </div>

      //     <div id="mobile">
      //       <span id='bar' className={this.state.clicked? <AlignJustify/>: <X/>}></span>
      //     </div>
      //   </div>
      // </nav>

      

