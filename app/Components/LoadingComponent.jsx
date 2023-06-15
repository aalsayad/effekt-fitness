import React from 'react';
import LottieAnimation from '../../public/Assets/Loading-lottie.json';
import Lottie from 'lottie-react';

function LoadingComponent() {
  return <Lottie animationData={LottieAnimation} />;
}

export default LoadingComponent;
