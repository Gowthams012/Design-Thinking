import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import studyImage from '../assets/study.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/signin'); 
  };

  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 className="home-title">
        <span className="blue">Study</span><span className="blue">Sync</span>
      </h1>

      <p className="home-subtitle">Power Up Your Learning Journey!</p>

      <img src={studyImage} alt="study" className="home-image" />

      <p className="home-quote">
        Your dreams won’t wait—why should you? <br />
        <span className="blue-text">Start now</span>, conquer later!
      </p>

      <button className="home-button" onClick={handleStart}>
        Let’s Start
      </button>
    </motion.div>
  );
};

export default Home;
