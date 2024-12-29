import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../components/header/header'
import '../App.css';
import Gym from './gym-page';
import Cars from './cars-page';

const Home = () => {
  return (
    <div>
    Home
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
