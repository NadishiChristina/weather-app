import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    // spinner - wind animation
    <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center">
      <div className="wind">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="text-white text-xl mt-8 font-semibold tracking-wide animate-pulse">
        LOOKING OUTSIDE FOR YOU...ONE SEC
      </p>
    </div>
  );
};

export default LoadingSpinner;
