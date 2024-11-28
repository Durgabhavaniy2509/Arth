import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      <div className=" flexCenter paddings innerWidth footer-head">
        <div className='flexColStart footer-info'>
          <img src="\Images\Arth.webp" alt="" width={100}/>
          <div className='whiteText'> Arth's innovative, pioneering digital-first solutions are transforming the construction industry. <br /> <br /> We are committed to working with top-tier clients globally to help their business become more efficient while saving time and cost on-site.
          </div>
        </div>

        <div className='flexColStart'>
          <div className='flexColStart address'>
            <span className='whiteText text-bold'>Office Locations:</span>
            <span className='whiteText text-bold'>Singapore:</span>
            <span className='whiteText'>3791 Jalan Bukit Merah, #04-09 <br /> E-Centre @ Redhill, Singapore 159471</span>
            <div className='whiteText'>
              <span> <a href="mailto:info@arth.team" className='whiteText'>info@arth.team</a></span>
              <span> / +65 90513783</span>
            </div>
          </div>

          <div className='flexColStart address'>
            <span className='whiteText text-bold'>India:</span>
            <span className='whiteText '>Arth Design Build India PVT. Ltd, <br />
              29, Urdu University Rd, Sri Shyam Nagar, <br />Telecom Nagar Extension, Gachibowli, <br /> Hyderabad,Telangana – 500032</span>
              <div className='whiteText'>
                <span> <a href="mailto:info@arth.team" className='whiteText'>info@arth.team</a></span>
                <span> / +91 88866 06722</span>
              </div>
          </div>

          <div className='flexColStart address'>
            <span className='whiteText text-bold'>USA:</span>
            <span className='whiteText'>USA Corporate Services Inc, <br /> 3500 S      Dupont Hwy, Dover DE 19901</span>
            <div className='whiteText'>
              <span> <a href="mailto:info@arth.team" className='whiteText'>info@arth.team</a></span>
              <span> / +91 88866 06722</span>
            </div>
          </div>  
        </div>

        <div className='flexColCenter'>
          <img src="\Images\map with pin.avif" alt=""  width={600} className='img-correction'/>
        </div> 
      </div>

    </section>
  )
}

export default Footer
