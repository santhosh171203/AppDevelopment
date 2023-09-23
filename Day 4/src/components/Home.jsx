import React from 'react';
import '../assets/css/Home.css';

import { Link } from 'react-router-dom';
// * import '../assets/css/Dashboard.css'
const Home = () => {
  
  return (
    <div className="homepage">
     
      <video autoPlay muted loop id="video-background">
        <source src="bicycle.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <header className="header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="/order">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        {/* <h1>Welcome to Our Website</h1> */}
      </header>

<div className='button1'><button1><Link to='signup' className='get'>Get Started</Link> </button1></div>
    </div>
  );
};

export default Home;