'use client';

import React, { useState } from 'react';
import '../../index.css';
import { motion } from 'framer-motion';

function Navlink({ name, enabled, href }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      className='relative [&>a]:text-sm [&>a]:transition [&>a]:duration-400 [&>a]:text-[#838695] [&>a]:font-light'
    >
      <a
        aria-disabled='true'
        href={href}
        className={`hover:text-[#D6D7DC]  ${!enabled && 'pointer-events-none hover:text-[#838695]'}`}
      >
        {name}
      </a>
      <motion.div
        initial={{ opacity: 0, x: '-50%', y: '-70%' }}
        animate={
          isHovering && !enabled
            ? { opacity: 1, x: '-50%', y: '-50%', transition: { delay: 0.1 } }
            : { opacity: 0, x: '-50%', y: '-70%' }
        }
        className='pointer-events-none flex items-start w-[200px] absolute text-xs font-light p-4 bg-[#14151A80]  text-[#C8C9D0]  top-[420%] left-1/2 transform rounded-lg'
      >
        <i className='absolute -top-[10px] left-1/2 transform -translate-x-1/2 text-[#14151A80] fi fi-ss-triangle'></i>
        <i className='fi fi-rs-hourglass-end flex mr-3 pt-1'></i>
        <p>This feature is comming soon!</p>
      </motion.div>
    </div>
  );
}

export default Navlink;
