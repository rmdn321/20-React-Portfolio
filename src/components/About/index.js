import React from 'react'
import Devi from "../../images/Devi.jpg"
import './index.css'

const About = () => {
  return (
    <div>
      <div className='container d-flex justify-content-center mt-5'>
        <div className="card about-card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={Devi} className="img-fluid rounded " alt="Devi" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title text-center text-pink">Who am I</h2>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut accusantium sit? Culpa provident harum iure natus fugiat. Nisi repellat laboriosam reprehenderit deleniti voluptate sed enim culpa totam voluptatibus sint aliquam fugit voluptates explicabo perferendis consequatur dolorum quo incidunt eligendi quis, dignissimos laudantium dolore. Id aspernatur sit placeat ullam dolor doloremque impedit eaque ratione consequuntur. Dolorum quisquam eius cumque sequi harum error voluptatibus iusto ipsa expedita culpa repellat explicabo, repellendus deserunt placeat commodi aut at dolore praesentium vitae minus! Voluptatem voluptas repudiandae eveniet! Qui unde aspernatur explicabo quos numquam, id quaerat labore voluptates illo veritatis at dolore rem molestias et fugit possimus quae eveniet dolorum ut adipisci? Cumque, vel odit porro unde itaque recusandae voluptatibus nemo amet nostrum aut aliquid quaerat doloremque quisquam.</p>              
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default About
