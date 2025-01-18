import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header/header';
import WorkExperience from '../components/home-page/work-experience';
import Projects from '../components/home-page/projects';
import '../App.css';
import Gym from './gym-page';
import Cars from './cars-page';
import TristanIcon from '../images/home-page-photos/tristan_icon.png';
import LinkedinIcon from '../images/home-page-photos/linkedin_icon.png';
import InstagramIcon from '../images/home-page-photos/instagram_icon.png';
import EmailIcon from '../images/home-page-photos/email_icon.png';
import iCodeIcon from '../images/home-page-photos/icodeschool_logo.jpg';
import TAOIcon from '../images/home-page-photos/engr_tao_logo.jpg';
import TAOLogo from '../images/home-page-photos/engr_tao_icon.png';
import MaroonRidesIcon from '../images/home-page-photos/maroonrides_icon.png';
import TurbulencePredictorIcon from '../images/home-page-photos/turbulencepredictor_icon.png';
import React from "react";

/* Copy email function */
const copyEmail = async () => {
  const email = "tristanaujong@gmail.com"

  try {
    await navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy email: ", err);
  }
};

/* Home Page */
const Home = () => {
  return (
  <div class="">
    <div class="flex flex-row container px-4 mx-auto max-w-7xl mt-24 items-center">
      <div class="mr-12">
        <img class="w-[300px]" src={TristanIcon} alt="tristan_icon.png" />
      </div>
      <div class="flex-col">
        <h1 class="text-4xl mb-2">
          <span class="font-sfpro">Hi! </span>
          <span class="font-sfprodisplaybold">I'm Tristan.</span>
        </h1>
        <p class="text-base">
          <span class="font-sfpro">I’m an aspiring Software Developer currently obtaining my CS undergraduate degree from </span>
          <span class="font-sfprodisplaybold">Texas A&M.</span>
        </p>
        <p class="text-base">
          <span class="font-sfpro">I’m a </span>
          <span class="font-sfprodisplaybold">Vice President </span>
          <span class="font-sfpro">of A&M's </span>
          <span class="font-sfprodisplaybold">Engineering Teacher Assistant Organization (TAO).</span>
        </p>
        <p class="text-base mb-4">
          <span class="font-sfpro">Previously interned at </span>
          <span class="font-sfprodisplaybold">iCode </span>
          <span class="font-sfpro">and </span>
          <span class="font-sfprodisplaybold">TAO, </span>
          <span class="font-sfpro">incoming </span>
          <span class="font-sfprodisplaybold">SWE Intern @ Lockheed Martin - Missiles & Fire Control.</span>
        </p>
        {/* Social Icons */}
        <div class="flex flex-row items-center">
          <a href="https://www.linkedin.com/in/tristan-lee-aujong" target="_blank" rel="noopener noreferrer" class="w-8 mr-4 hover:opacity-75">
            <img src={LinkedinIcon} alt="Linkedin icon"></img>
          </a>
          <a href="https://www.instagram.com/tristan_mahjong/" target="_blank" rel="noopener noreferrer" class="w-8 mr-4 hover:opacity-75">
            <img src={InstagramIcon} alt="Instagram icon"></img>
          </a>
          <button onClick={copyEmail}>
            <img src={EmailIcon} alt="Email icon" class="w-8 mr-3 hover:opacity-75"></img>
          </button>
        </div>
      </div>
    </div>
    <hr class="flex items-center border-t border-black w-9/12 mx-auto my-12" />
    <div class="container flex flex-col mx-auto items-center">
      <h1 class="font-sfprodisplaybold text-4xl mb-10">
        Relevant Experience
      </h1>
      <div class="flow-root">
      <WorkExperience class="float-left" image={iCodeIcon} company="iCode" location=", Southlake, TX" 
        title="Computer Science STEAM Technical Lead Intern" 
        b1="Led various coding camps and exposed 30+ students to numerous applications of programming" 
        b2="Utilized HTML, CSS, and bootstrap technology to teach front-end web development" 
        b3="Data analysis and Python 3 skills used for drone programming challenges"
        dates="May 2024 - August 2024"
      />
      <WorkExperience class="float-left" image={TAOIcon} company="Engineering Teacher’s Assistant Organization" location=", College Station, TX" 
        title="Software Development Intern" 
        b1="Developed a website for TAMU engineering students to access resources, review material, links, etc." 
        b2="Built to support 5,000+ members of TAO" 
        b3="Utilized Next.JS, Tailwind CSS, and Typescript technologies"
        dates="March 2024 - September 2024"
      />
      </div>
    </div>
    <hr class="flex items-center border-t border-black w-9/12 mx-auto my-8" />
    <div class="container flex flex-col mx-auto items-center">
      <h1 class="font-sfprodisplaybold text-4xl mb-8">
        Projects I've Worked On
      </h1>
      <div class="flex flex-row flex-wrap justify-center mb-16">
        <Projects name="Maroon Rides" image={MaroonRidesIcon} link="https://maroonrides.app/"/>
        <Projects name="TAO Website" image={TAOLogo} link="https://engrtao.tech/"/>
        <Projects name="Turbulence Predictor" image={TurbulencePredictorIcon} link="https://devpost.com/software/turbulence-predictor"/>
      </div>
    </div>
  </div>
  );
};

/* App Layout */
function HomePage() {
  return (
      <div className="header">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gym" element={<Gym />} />
            <Route path="/cars" element={<Cars />} />
          </Routes>
        </Router>
      </div>
  );
}

export default HomePage;
