import React from 'react'
import './index.css'
import App1 from '../../images/B4UBoard.png'
import App2 from '../../images/BonAppetit.png'
import App3 from '../../images/GetItDone.png'
import App4 from '../../images/JavascriptQuiz.png'
import App5 from '../../images/WeatherApp.png'
import App6 from '../../images/WorkdayScheduler.png'

const Portfolio = () => {
  return (
    <>
      <h2 className='text-pink text-center my-3'>Take a look at some of my works</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-5">
        <div className="col">
          <div className="card h-100 pink-border">
            <img src={App1} className="card-img-top" alt="B4UBoard page"/>
            <div className="card-body">
              <h5 className="card-title text-pink">B4UBoard</h5>
              <p className="card-text">Check out the application <a href='https://jackyouk.github.io/B4UBoard/'>here</a> and on GitHub <a href='https://github.com/JackYouk/B4UBoard'>here</a></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 pink-border">
            <img src={App2} className="card-img-top" alt="Bon Appetit page"/>
            <div className="card-body">
              <h5 className="card-title text-pink">Bon-Appetit</h5>
              <p className="card-text">Check out the application <a href='https://anu-bon-appettit.herokuapp.com/'>here</a> and on GitHub <a href='https://github.com/anuvytla/bon-appetit'>here</a></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 pink-border">
            <img src={App3} className="card-img-top" alt="Get It Done page"/>
            <div className="card-body">
              <h5 className="card-title text-pink">Get It Done</h5>
              <p className="card-text">Check out the application <a href='https://get-it-done-kanban-pm.herokuapp.com/'>here</a> and on GitHub <a href='https://github.com/anuvytla/GetItDone'>here</a></p>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100 mb-5  pink-border">
            <img src={App4} className="card-img-top" alt="Javascript Quiz page"/>
            <div className="card-body">
              <h5 className="card-title text-pink">Javascript Quiz</h5>
              <p className="card-text">Check out the application <a href='https://rmdn321.github.io/4-JS-Quiz/'>here</a> and on GitHub <a href='https://github.com/rmdn321/4-JS-Quiz'>here</a></p>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100 mb-5  pink-border">
            <img src={App5} className="card-img-top" alt="Workday Scheduler page"/>
            <div className="card-body">
              <h5 className="card-title text-pink">Workday Scheduler</h5>
              <p className="card-text">Check out the application <a href='https://rmdn321.github.io/5-Work-Day-Scheduler/'>here</a> and on GitHub <a href='https://github.com/rmdn321/5-Work-Day-Scheduler'>here</a></p>
            </div>
          </div>
        </div>
        <div className="col mb-5">
          <div className="card h-100 mb-5  pink-border">
            <img src={App6} className="card-img-top" alt="Weather Application page"/>
            <div className="card-body">
              <h5 className="card-title text-pink">Weather Application</h5>
              <p className="card-text">Check out the application <a href='https://rmdn321.github.io/6-Weather-App/'>here</a> and on GitHub <a href='https://github.com/rmdn321/6-Weather-Apphttps://github.com/rmdn321/6-Weather-App'>here</a></p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default Portfolio
