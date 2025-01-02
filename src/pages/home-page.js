import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header/header'
import '../App.css';
import Gym from './gym-page';
import Cars from './cars-page';
import TristanIcon from '../images/home-page-photos/tristan_icon.png';
import LinkedinIcon from '../images/home-page-photos/linkedin_icon.png';
import InstagramIcon from '../images/home-page-photos/instagram_icon.png';
import EmailIcon from '../images/home-page-photos/email_icon.png';
import React from "react";

const copyEmail = async () => {
  const email = "tristanaujong@gmail.com"

  try {
    await navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy email: ", err);
  }
};

const Home = () => {
  return (
    <div>
    <div class="flex flex-row container px-4 mx-auto max-w-7xl mt-24 items-center ">
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
    <hr class="flex items-center border-t border-black w-3/4 mx-auto my-12" />
    </div>
  );
};

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
