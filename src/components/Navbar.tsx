export default function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full bg-white shadow'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>Andrew B.</div>
        <ul className='flex space-x-6'>
          {['home', 'about', 'services', 'portfolio', 'contact'].map(
            (section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className='capitalize hover:text-blue-500'
                >
                  {section}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
