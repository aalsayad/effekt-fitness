'use client';

import React, { useEffect, useState } from 'react';
import { useAnimate, stagger } from 'framer-motion';
import LottieLoading from '../Components/LoadingComponent';
import '../index.css';

function LoginPage() {
  const [isGoogleAuthenticating, setIsGoogleAuthenticating] = useState(false);
  const [isGithubAuthenticating, setIsGithubAuthenticating] = useState(false);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate([
      ['#slideUp', { opacity: [0, 1] }, { duration: 0.75, delay: stagger(0.1) }],
      ['#slideUp', { y: [30, 0] }, { duration: 0.5, delay: stagger(0.25), at: '<' }],
    ]);
  }, []);

  const handleGoogleAuth = () => {
    setIsGoogleAuthenticating((prev) => !prev);
  };
  const handleGithubAuth = () => {
    setIsGithubAuthenticating((prev) => !prev);
  };

  const buttonStyle =
    'w-full transition diration-200 h-[55px] ease-in-out flex items-center justify-center text-sm border-[1px] py-[16px] rounded-md border-[#464853] hover:bg-[#2D2F39] hover:border-[#525460]';
  return (
    <div ref={scope} className='max-w-[1120px] mx-auto flex items-center justify-center min-h-[calc(100dvh-90px)]'>
      <div className='flex flex-col max-w-[600px] w-[80%] h-[50dvh] justify-between'>
        <div id='slideUp' className='opacity-0 flex flex-col items-center '>
          <h1 className='text-xl'>Welcome back!</h1>

          <h2 className='text-sm text-[#9FA1AD] font-light mb-10'>Login to your account</h2>
          <button onClick={() => handleGoogleAuth()} className={`${buttonStyle} bg-[#24262E] mb-4`}>
            {isGoogleAuthenticating ? (
              <LottieLoading />
            ) : (
              <div className='flex items-center'>
                <i className='fi fi-brands-google text-sm flex mr-4'></i>
                Login with Google
              </div>
            )}
          </button>
          <button onClick={() => handleGithubAuth()} className={`${buttonStyle} mb-4`}>
            {isGithubAuthenticating ? (
              <LottieLoading />
            ) : (
              <div className='flex items-center'>
                <i className='fi fi-brands-github text-sm flex mr-4'></i>
                Login with Github
              </div>
            )}
          </button>
        </div>
        <div id='slideUp' className='opacity-0'>
          <p className='text-xs text-[#838695] text-center'>
            By continuing, you agree to effekt's Terms of Service and Privacy Policy, <br />
            and to receive periodic emails with updates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
