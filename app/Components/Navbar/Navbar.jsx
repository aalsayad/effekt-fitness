import React from 'react';
import LogoComponent from '../LogoComponent';
import './Navbar.styles.css';
import Navlink from './Navlink';

function Navbar() {
  const navLinks = [
    {
      name: 'Dashboard',
      href: '',
      enabled: true,
    },
    {
      name: 'Database',
      href: '',
      enabled: true,
    },
    {
      name: 'Community',
      href: '',
      enabled: false,
    },
    {
      name: 'Blog',
      href: '',
      enabled: false,
    },
  ];
  return (
    <div>
      <div className='absolute top-[-35%] left-[calc(30%-300px)] h-[500px] w-[600px] bg-[#E7C05708] rounded-full blur-2xl -z-10'></div>
      <div className='h-[80px] border-b-[1px] border-[#ffffff10] backdrop-blur-3xl'>
        <div className='max-w-[1120px] mx-auto h-full flex items-center justify-between'>
          <div className='h-full flex items-center'>
            <a href='/'>
              <LogoComponent width='140' />
            </a>
            <div className='flex gap-7 ml-20 '>
              {navLinks.map((link) => {
                return <Navlink key={link.name} name={link.name} enabled={link.enabled} href={link.href} />;
              })}
            </div>
          </div>

          <a
            href='/login'
            className='transition diration-200 ease-in-out flex items-center justify-center font-light text-sm border-[1px] px-8 py-[9px] rounded-md border-[#464853] hover:bg-[#2D2F39] hover:border-[#525460]'
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
