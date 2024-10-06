import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import DiscoverYourNextAdventure from '../assets/DiscoverYourNextAdventure.png';
import UnlockYourCreativeSide from '../assets/UnlockYourCreativeSide.png';
import FindYourPerfectFit from '../assets/FindYourPerfectFit.png';
import JoinTheExcitement from '../assets/JoinTheExcitement.png';
import CalenderIcon  from '../assets/Calendar-icon.png';
import CreateAccountIcon  from '../assets/CreateAccount-icon.png';
import DiscoverIcon  from '../assets/Discover-icon.png';
import SmileyIcon  from '../assets/Smiley-icon.png';
import Categories from '../components/Categories'

const images = [
  DiscoverYourNextAdventure,
  UnlockYourCreativeSide,
  FindYourPerfectFit,
  JoinTheExcitement
]

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideClass, setSlideClass] = useState('slide-enter');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const changeSlide = (n) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideClass('slide-exit');

    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + n;
        if (newIndex >= images.length) return 0;
        if (newIndex < 0) return images.length - 1;
        return newIndex;
      });
      setSlideClass('slide-enter');
      setIsTransitioning(false);
    }, 1000);
  };

  const currentSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideClass('slide-exit');

    setTimeout(() => {
      setCurrentIndex(index);
      setSlideClass('slide-enter');
      setIsTransitioning(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <>

    <div className="slideshow-container">
      <div className={`scroll-slides ${slideClass}`}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
      <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
      <div className="slide-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>
    </div>

    <div>
      <h1 className="book-manage-enjoy">Book, Manage, Enjoy - Activities Made Simple.</h1>
    </div>

    <div className="how-it-works">
        <div className="how-it-works-col">
          <img onClick={() =>{navigate('/register')}} src={CreateAccountIcon} className="how-it-works-image" alt="profile-plus"></img>
          <h3>Create an Account</h3>
        </div>
        <div className="how-it-works-col">
          <img onClick={() =>{navigate('/categories')}} src={DiscoverIcon}className="how-it-works-image" alt="search-page"></img>
          <h3>Browse & Book</h3>
        </div>
        <div className="how-it-works-col">
          <img onClick={() =>{navigate('/my-schedge')}} src={CalenderIcon} className="how-it-works-image" alt="calender"></img>
          <h3>Manage Your Activities</h3>
        </div>
        <div className="how-it-works-col">
          <img onClick={() =>{navigate('/reviews')}} src={SmileyIcon} className="how-it-works-image" alt="smiley-face"></img>
          <h3>Enjoy & Repeat</h3>
        </div>
    </div>
    <Categories/>
    </>

  );
};

export default Home;
