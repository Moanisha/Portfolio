import React from "react";
import angular from "./Assets/angular.png";
import react from "./Assets/react.png";
import nodejs from "./Assets/nodejs.png";
import html from "./Assets/html.png";
import css from "./Assets/css.png";
import mongodb from "./Assets/mongodb.png";
import postgresql from "./Assets/postgresql.png";
import aws from "./Assets/aws.png";
import javascript from "./Assets/javascript.png";
import ResumeDownload from "./ResumeDownload";

const SkillCard = ({ imageSrc }) => {
  return (
    <div className="col-md-4 col-sm-4 col-4">
      <div className="card">
        <img src={imageSrc} className="card-img-top" alt="Source not found" />
      </div>
    </div>
  );
};
const AboutCard = () => {
  return (
    <div className="card text-center d-flex justify-content-center">
      <h1>Moanisha Velayuthem</h1>
      <div>
        "I am an experienced web developer with a proven track record of more
        than 5 years in the industry. My expertise extends across the entire
        software development lifecycle, including analysis, design, development,
        testing, and deployment of a wide range of software applications. I am
        well-versed in AGILE methodologies, which enable me to deliver efficient
        and high-quality solutions.
      </div>
      <div>
        "Beyond my technical skills, I am a strong communicator. I excel in
        collaborating closely with clients to ensure a deep understanding of
        project requirements and providing regular updates on project progress.
        My work is characterized by its responsiveness and cross-browser
        compatibility, ensuring a consistent and smooth user experience across
        various web browsers."
      </div>
      <ResumeDownload />
    </div>
  );
};
const About = () => {
  const skills = [
    {
      imageSrc: angular,
    },
    {
      imageSrc: react,
    },
    {
      imageSrc: nodejs,
    },
    {
      imageSrc: html,
    },
    {
      imageSrc: css,
    },
    {
      imageSrc: mongodb,
    },
    {
      imageSrc: postgresql,
    },
    {
      imageSrc: aws,
    },
    {
      imageSrc: javascript,
    },
    // Add more skills
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="row my-4 col-md-6 col-sm-12 col-12">
          {skills.map((skill, index) => (
            <SkillCard key={index} imageSrc={skill.imageSrc} />
          ))}
        </div>
        <div className="row my-4 col-md-6 col-sm-12 col-12">
          <AboutCard />
        </div>
      </div>
    </div>
  );
};

export default About;
