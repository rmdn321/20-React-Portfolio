import React from 'react'
import './index.css'

const Contact = () => {
  return (
    <div>
    <div className='container d-flex justify-content-center mt-5'>
      <div className="card contact-card mb-3">
        <div className="row g-0">
          <h2 className="text-center text-pink">Contact Me</h2>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input type="text" className="form-control"/>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email address</label>
          <input type="email" className="form-control"/>
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">Message</label>
          <textarea className="form-control" rows="3"></textarea>
        </div> 
        <button className='btn pink-btn'>Send</button>        
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact
