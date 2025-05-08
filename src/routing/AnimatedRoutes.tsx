import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import TeamPage from "./TeamPage";
import GalleryPage from './GalleryPage';
import QuizPage from '../components/QuizPage/QuizPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/" element={<TeamPage />} />
        <Route path="/gallery/" element={<GalleryPage />} />
        <Route path="/quiz/" element={<QuizPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
