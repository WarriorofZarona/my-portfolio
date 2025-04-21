export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full bg-amber-900 bg-cover bg-center z-50'>
      <div className='bg-black/70 backdrop-blur-sm'>
        <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
          <div className='text-2xl font-bold text-white'>Andrew B.</div>
          <ul className='flex space-x-6'>
            {['home', 'about', 'services', 'portfolio', 'contact'].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className='capitalize text-white hover:text-blue-400 transition-colors'
                  >
                    {section}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
