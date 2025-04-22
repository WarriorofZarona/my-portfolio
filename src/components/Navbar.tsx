import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 w-full bg-amber-900 bg-cover bg-center z-50'>
      <div className='bg-black/70 backdrop-blur-sm'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex justify-between items-center'>
            <div className='flex items-end'>
              <img src='/assets/images/logo.png' className='h-10 w-10' />
              <div className='text-2xl font-bold text-white'>AMB Webdev</div>
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden text-white hover:text-amber-300 transition-colors'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>

            {/* Desktop menu */}
            <ul className='hidden md:flex space-x-6'>
              {['home', 'about', 'services', 'portfolio', 'contact'].map(
                (section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className='capitalize text-white hover:text-amber-300 transition-colors'
                    >
                      {section}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Mobile menu */}
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}
          >
            <ul className='flex flex-col space-y-4'>
              {['home', 'about', 'services', 'portfolio', 'contact'].map(
                (section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      onClick={() => setIsMenuOpen(false)}
                      className='capitalize text-white hover:text-amber-300 transition-colors block'
                    >
                      {section}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
