import React from "react";
import "./Projects.css"; // Import CSS file for styling
import Wisepal from "./../Assets/Wisepal.mp4";
import CRUD from "./../Assets/CRUD.mp4";
import Saluswell from "./../Assets/Saluswell.mp4";
import parse from "html-react-parser";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Wisepal",
      description: `<h4 id="overview">Overview</h2>
      <p>Wise Paals is a platform designed to connect students with tutors. Users can filter through various parameters, including subject and price, to find a tutor that meets their specific preferences. Additionally, users have the option to register as a tutor and add their information to the platform.</p>
      <h4 id="url">URL</h2>
      <h5 id="backend">Backend</h3>
      <p><a href="https://clear-jade-scarab.cyclic.app">https://clear-jade-scarab.cyclic.app</a></p>
      <h5 id="frontend">Frontend</h3>
      <p><a href="https://wisepal-tutor-finder.netlify.app/">https://wisepal-tutor-finder.netlify.app/</a></p>
      <h4 id="features">Features</h2>
      <ul>
      <li>
      Register and Login Page (Modal)</li>
      <li>
      Session</li>
      <li>
      JWT Authentication</li>
      <li>
      Find Tutors based on different filters</li>
      <li>
      Register as a tutor</li>
      <li>
      Add a Review and Rating</li>
      <li>
      Contact tutors</li>
      <li>
      User and Tutor(Profile, Settings)</li>
      <li>
      Tutor Statistics</li>
      <li>
      Home page</li>
      </ul>
      <h4 id="technologies">Technologies</h2>
      <ul class="task-list">
      <li>
      React.js</li>
      <li>
      Node.js</li>
      <li>
      Express.js</li>
      <li>
      MongoDB</li>
      <li>
      Javascript</li>
      <li>
      Material-UI</li>
      </ul>`,
      videoUrl: Wisepal,
    },
    {
      id: 2,
      title: "React ASP.NET",
      description: `<h4 id="overview">Overview</h2>
      <p>The project involves developing a comprehensive CRUD (Create, Read, Update, Delete) application utilizing React JS for the frontend and Asp.Net Core Web API as the backend technology stack, incorporating Entity Framework alongside SQL Server for data management.</p>
      
      <h4 id="features">Features</h2>
      <ul>
      <li>
      Add entry to table</li>
      <li>
      Ubdate table row</li>
      <li>
      Delete table row</li>
      </ul>

      <h4 id="technologies">Technologies</h2>
      <ul class="task-list">
      <li>
      React.js</li>
      <li>
      ASP.NET</li>
      <li>
      Entity Framework</li>
      <li>
      SQL Server</li>
      <li>
      Material-UI</li>
      </ul>`,
      videoUrl: CRUD,
    },
    {
      id: 2,
      title: "Saluswell",
      description: `<h4 id="overview">Overview</h2>
      <p>Full-stack application that promotes wellness and lifestyle changes for clients. The application includes features like CRUD functionality, user authentication with multiple roles, and an appointment booking system.</p>
      
      <h4 id="features">Features</h2>
      <ul>
      <li>
      Login/signup using different roles</li>
      <li>
      Appointment booking</li>
      <li>
      Meal Sharing and Creating Recipes</li>
      <li>
      Maintain Profile</li>
      </ul>
      
      <h4 id="technologies">Technologies</h2>
      <ul class="task-list">
      <li>
      React.js</li>
      <li>
      Node Js</li>
      <li>
      Express JS</li>
      <li>
      PostgreSQL</li>
      <li>
      AWS</li>
      </ul>`,
      videoUrl: Saluswell,
    },
    // Add more projects as needed...
  ];

  return (
    <div className="projects-container">
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <h2>{project.title}</h2>
            <div>{parse(project.description)}</div>
            <div className="video-container">
              <iframe
                src={project.videoUrl}
                title={project.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
