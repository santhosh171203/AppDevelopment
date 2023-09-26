import React, { useRef, useState } from 'react';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';
import TriviaQuiz from './TriviaQuiz';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';
import Footer from './Footer';


const Home = () => {

  const [likes, setLikes] = useState(0);
  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };
  
  const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  const shareUrl = 'https://your-website-url.com'; // Replace with your website URL
  const title = 'Check out this amazing website!';

  return (
    <div className="homepage">
      <div className="image-container">
        <img
          src={imageUrls[currentImageIndex]}
          alt={'Image ${currentImageIndex + 1}'}
          height="600vh"
          width="1500vh"
        />
        <button
          className="img-button img-button-left"
          disabled={currentImageIndex === 0}
          onClick={handlePrevious}
        >
          <img src="sy1.jpg" height="30px" width="50px" alt="Previous" />
        </button>
        <button
          className="img-button img-button-right"
          disabled={currentImageIndex === imageUrls.length - 1}
          onClick={handleNext}
        >
          <img src="sy2.jpg" height="30" width="50px" alt="Next" />
        </button>
        <br></br>
      </div>

        <h2>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Featured Content</h2>
      <div className="featured-content">
      <div className="featured-item">
  <img
    src="y2.avif"
    alt="Featured Image 1"
    height="400px"
    width="600px"
  />
  <h3>Featured Electric Scooter</h3>
  <p>
    Esandy is now Part of Microsoft for Startups Programme
  </p>
  <Link to="https://evzon.in/evzon-in-is-now-part-of-microsoft-for-startups/">Read More</Link>
  <button className="like-button" onClick={handleLikeClick}>
    Like <span role="img" aria-label="like">👍</span>
  </button>
  <p>{likes} Likes</p>
</div>

<div className="featured-item">
  <img
    src="s3.avif"
    alt="Featured Image 1"
    height="400px"
    width="600px"
  />
  <h3>Featured Electic Car</h3>
  <p>
    Esandy is now Part of Microsoft for Startups Programme
  </p>
  <Link to="https://evzon.in/evzon-in-is-now-part-of-microsoft-for-startups/">Read More</Link>
  <button className="like-button" onClick={handleLikeClick}>
    Like <span role="img" aria-label="like">👍</span>
  </button>
  <p>{likes} Likes</p>
</div>


        {/* Add more featured items here */}
      </div>
<TriviaQuiz/>




       <Footer/>
     
      
      

    </div>
  );
};

export default Home;