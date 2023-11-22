import * as React from "react";
import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="container">
      <div className="row">
        <div class="container">
          <div class="main-timeline">
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="year">2012</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">High School</h5>
                <p class="description">I graduated high school with 94.5%</p>
              </div>
            </div>
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">4 Years</span>
                    <span class="year">2016</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">Bachelors' Degree</h5>
                <p class="description">
                  I majored in Computer Science and Engineering while attending
                  college, and I graduated with an impressive 83% academic
                  performance. My strong passion for programming led me to
                  secure a developer position at Cognizant even before I
                  completed my degree!
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">5 Years</span>
                    <span class="year">2016</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">Web Developer</h5>
                <p class="description">
                  I began my professional journey as a trainee and progressively
                  advanced to the role of an intermediate front-end developer by
                  leveraging technologies such as React and Angular!
                </p>
              </div>
            </div>
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">2 Years</span>
                    <span class="year">2023</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">Post Graduation Degree</h5>
                <p class="description">
                  I further expanded my knowledge by pursuing a postgraduate
                  degree in Information Technology Solutions in Canada,
                  establishing a robust foundation for my professional career in
                  the country!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
