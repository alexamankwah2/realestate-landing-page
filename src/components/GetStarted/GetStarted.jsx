import React from 'react'
import "./GetStarted.css"

const GetStarted = () => {
  return (
   <section className="g-wrapper">
    <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
            <span className='primaryText'>Get Started With Horizon</span>
            <span className='secondaryText'>Subscribe to our newsletter and be the first to know about new listings, price drops, and exclusive deals.</span>
            <button className='button'>
                <a href="mailto:horizonhomes@gmail.com">Get Started</a>
            </button>
        </div>
    </div>
   </section>
  )
}

export default GetStarted
