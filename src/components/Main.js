import React from "react";
import "../styles/Main.css";
import Projects from "./Projects";
import About from "./About";

function Main() {
  return (
    <main>
      <div className="header">Projects</div>
      <Projects />
      <div className="header">About Me</div>
      <About />
      <footer>Made with ReactJs - 2023 &#169;</footer>
    </main>
  );
}

export default Main;
