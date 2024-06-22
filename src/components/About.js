import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/About.css";

function About() {
  const notify = () =>
    toast.success("Copied to clipboard!", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const copyToClipboard = () => {
    navigator.clipboard.writeText("abhaykamath2299@gmail.com");
  };
  return (
    <>
      <div className="about-container">
        <div className="contact">
          <div
            id="email"
            onClick={() => {
              copyToClipboard();
              notify();
            }}
          >
            <i className="fa-solid fa-envelope"></i>
            <div>abhaykamath2299@gmail.com</div>
            <i className="fa-regular fa-clipboard"></i>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <div>+91-8921592612</div>
          </div>
          <div id="github">
            <i className="fa-brands fa-github"></i>
            <div>
              <a href="https://github.com/abhaykamath" target="_blank">
                https://github.com/abhaykamath
              </a>
            </div>
          </div>
        </div>
        <p>
          I'm a self-driven professional who is good at problem-solving and
          programming, with an emphasis on writing clean and maintainable code.
          Experienced with data structures/algorithms and designing optimal
          solutions.
        </p>
        <span className="about-header">Skills</span>
        <div id="skills-container">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.Js</li>
          <li>Express.Js</li>
          <li>Node.JS</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>Data structures</li>
          <li>Algorithms</li>
          <li>Git/GitHub</li>
          <li>Postman</li>
          <li>Cypress</li>
          <li>Selenium</li>
          <li>Agile</li>
          <li>JIRA</li>
          <li>Confluence</li>
        </div>
        <span className="about-header">Work Experience</span>
        <div>
          Project Engineer <em>@ Wipro Technologies</em>
        </div>
        <div
          style={{
            fontSize: "0.9rem",
            color: "#888888",
          }}
        >
          Dec 2020 to Dec 2022
        </div>
        <p>
          As an Automation QA Engineer, I had the opportunity to work with
          Lloyds Banking Group, contributing to automated UI and API testing
          using Cypress and Selenium. Additionally, I took an active role in
          helping onboard new team members, providing guidance and support to
          ensure a smooth integration into our collaborative and agile
          environment. I was involved in managing test plans, executions, and
          test cases, ensuring quality for the bank's digital products.
          Collaborating with cross-functional teams, I strived for continuous
          improvement and embraced challenges with a growth mindset, leaving a
          positive impact on my career.
        </p>
        <span className="about-header">Courses</span>
        <li>
          Full-Stack Developer Bootcamp <em>@ 10x Academy</em>
        </li>
        <div
          style={{
            fontSize: "0.9rem",
            color: "#888888",
          }}
        >
          Jan 2023 to Jul 2023
        </div>
        <div>
          6-month full-time program focused on data structures/algorithms & the
          MERN tech stack.
        </div>
        <span className="about-header">Education</span>
        <li>
          Bachelor of Engineering (<em>CGPA 8.19</em>)
        </li>
        <div
          style={{
            fontSize: "0.9rem",
            color: "#888888",
          }}
        >
          2016 to 2020
        </div>
        <div>R V College of Engineering, Bangalore</div>
        <br></br>
        <li>
          Senior Secondary - Class XII (<em>Score 96%</em>)
        </li>
        <div
          style={{
            fontSize: "0.9rem",
            color: "#888888",
          }}
        >
          2014 to 2016
        </div>
        <div>Silver Hills Public School (CBSE), Kozhikode</div>
      </div>
      <ToastContainer />
    </>
  );
}

export default About;
