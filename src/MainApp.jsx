import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

function MainApp() {
  return (
    <div className="MainApp">
      <NavBar />

      <main className="main">
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About header="About" />
        </div>

        <div id="skills">
          <Skills header="Skills" />
        </div>

        <div id="education">
          <Education header="Education" />
        </div>

        <div id="experience">
          <Experience header="Experience" />
        </div>

        <div id="projects">
          <Projects header="Projects" />
        </div>
      </main>
    </div>
  );
}

export default MainApp;