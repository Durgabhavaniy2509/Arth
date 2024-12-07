import React from 'react'
import './Journey.css';
import { Flag, Globe, MapPinned, Rocket, SignpostBig, Trophy } from 'lucide-react';

const Journey = () => {
  return (
  <div className="timeline">
    <div className="container left">
      <div className="date">2013</div>
      <span className='icon'><Flag/></span>
      <div className="content">
        <p>
        Arth embarked on its journey with a clear mission: to apply proven design and build consultancy practices that bridge the gap between vision and reality
        </p>
      </div>
    </div>
    <div className="container right">
      <div className="date">2015</div>
      <span className='icon'><Rocket/></span>
      <div className="content">
        <p>
          We began integrating cutting-edge construction technologies, setting the stage for greater innovation
        </p>
      </div>
    </div>
    <div className="container left">
      <div className="date">2016</div>
      <span className='icon'><SignpostBig/></span>
      <div className="content">
        <p>
          The company expanded into Hyderabad, Bangalore, and Dubai
        </p>
      </div>
    </div>
    <div className="container right">
      <div className="date">2018</div>
      <span className='icon'><MapPinned/></span>
      <div className="content">
        <p>
          The opening of our Singapore office in 2018 marked a new chapter, where we continued to enhance service excellence.
        </p>
      </div>
    </div>
    <div className="container left">
      <div className="date">2019</div>
      <span className='icon'><Trophy/></span>
      <div className="content">
        <p>
          We secured significant LTA and DfMA projects, cementing our role as a digitalization partner for modern construction
        </p>
      </div>
    </div>

    <div className="container right">
      <div className="date">2022</div>
      <span className='icon'><Globe/></span>
      <div className="content">
        <p>
          We expanded into the US market, continuing our pursuit of innovation with advanced technological offerings
        </p>
      </div>
    </div>
</div>
  )
}

export default Journey
