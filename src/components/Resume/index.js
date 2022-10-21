import React from "react";

const Resume = () => {
  return (
    <div>
      <div className="container d-flex justify-content-center mt-5">
        <div className="card about-card mb-3">
          <div className="row g-0">
            <h2 className="text-pink mb-4">I am proficient in the following...</h2>
            <div className="col-md-6">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>              
            </div>
            <div className="col-md-6">
            <ul>               
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Sequelize</li>
                <li>Mongoose</li>
                <li>React.js</li>
                <li>GraphQL</li>  
                <li>Redux</li>             
              </ul>
            </div>
            <button className='btn pink-btn'>Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
