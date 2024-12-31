import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/header/header'
import '../App.css';
import Gym from './gym-page';
import Cars from './cars-page';
import TristanIcon from '../images/home-page-photos/tristan_icon.png';
import LinkedinIcon from '../images/home-page-photos/linkedin_icon.png';
import InstagramIcon from '../images/home-page-photos/instagram_icon.png';

const Home = () => {
  return (
    <div class="flex flex-row container px-4 mx-auto max-w-7xl my-24 items-center ">
      <div class="mr-12">
        <img class="w-[300px]" src={TristanIcon} alt="tristan_icon.png" />
      </div>
      <div class="flex-col">
        <h1 class="text-4xl mb-4">
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
        <div class="flex flex-row">
          <a href="https://www.linkedin.com/in/tristan-lee-aujong" class="w-10 mr-2">
            <img src={LinkedinIcon} alt="Linkedin icon"></img>
          </a>
          <a href="https://www.instagram.com/tristan_mahjong/" class="w-10 mr-2">
            <img src={InstagramIcon} alt="Linkedin icon"></img>
          </a>
        </div>
      </div>
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
