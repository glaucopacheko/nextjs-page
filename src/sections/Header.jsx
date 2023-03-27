import React from 'react';

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
          <button className='btn btn-sm'>Contato</button>
        </div>
      </div>
    </header>
  )
};

export default Header;