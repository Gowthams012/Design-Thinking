import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SplashScreen from './component/SplashScreen';
import Home from './component/Home';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

const SplashRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // after 3s

    return () => clearTimeout(timer);
  }, [navigate]);

  return <SplashScreen />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashRoute />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
