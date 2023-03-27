import React from 'react';

import Logo from '../../public/next.svg'

const Header = () => {
  return(
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* LOGO */}
          <a href='#'>
            <img src='/logo.svg' alt='Logo' />
          </a>
          {/* Button */}
          <button className='btn btn-sm'>Entrar</button>
        </div>
      </div>
    </header>
  )
};

export default Header;