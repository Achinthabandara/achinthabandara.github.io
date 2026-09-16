import React, { useState, useEffect, useContext } from 'react';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import { ThemeContext } from 'styled-components';

import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import '../css/home.css';
import Particles from './Particles';

function Home() {
  const [data, setData] = useState(null);

  // Get the current theme
  const theme = useContext(ThemeContext);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  // Change particle color depending on the theme
  const particleColor =
    theme?.bsPrimaryVariant === 'dark' ? '#ffffff' : '#111827';

  return data ? (
    <Fade triggerOnce className="home-fade-container">
      <section className="hero">

        {/* Particle Background */}
        <div className="particles-background">
          <Particles
            particleColors={[particleColor]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* Hero Content */}
        <div className="bento">

          {/* Main Introduction Card */}
          <div className="tile hero-intro span-4 rspan-2">

            {data?.status && (
              <span className="hero-eyebrow">
                {data.status}
              </span>
            )}

            <h1 className="hero-name">
              {data?.name}
            </h1>

            <div className="hero-roles">
              <span>I&apos;m&nbsp;</span>

              <Typewriter
                options={{
                  loop: true,
                  autoStart: true,
                  strings: data?.roles,
                }}
              />
            </div>

            {data?.tagline && (
              <p className="hero-tagline">
                {data.tagline}
              </p>
            )}

            <div className="hero-cta">

              <a
                className="btn-pill btn-accent"
                href="#projects"
              >
                View my work
              </a>

              <a
                className="btn-pill btn-ghost"
                href="#about"
              >
                About me
              </a>

            </div>
          </div>

          {/* GitHub Profile Card */}
          <a
            href="https://github.com/Achinthabandara"
            target="_blank"
            rel="noopener noreferrer"
            className="tile github-profile span-2"
            aria-label="Visit Achintha Bandara GitHub profile"
          >
            <img
              src="/images/github.png"
              alt="Achintha Bandara GitHub Profile"
            />
          </a>

          {/* Social Media Card */}
          <div className="tile hero-social span-2">

            <span className="tile-label">
              Find me
            </span>

            <Social />

          </div>

        </div>

      </section>
    </Fade>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;