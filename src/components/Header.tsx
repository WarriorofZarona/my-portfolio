export default function Header() {
  return (
    <header
      id='home'
      className='h-screen bg-cover bg-center'
      style={{
        backgroundImage: "url('/assets/images/header-bg-wide.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex items-center justify-center h-full bg-black/30'>
        <div className='text-center text-white px-4 max-w-4xl mx-auto'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight'>
            Brewing Apps,{' '}
            <span className='block sm:inline'>One Cup at a Time</span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl mx-auto'>
            Coffee in hand, code on screen—hey, I'm Andrew, your React barista.
          </p>
          <div className='space-x-4'>
            <a
              href='#about'
              className='inline-block bg-amber-900 hover:bg-amber-700 text-white py-2 px-6 rounded transition transform hover:scale-105'
            >
              Learn More
            </a>
            <a
              href='#portfolio'
              className='inline-block border-2 border-white hover:bg-white hover:text-amber-900 text-white py-2 px-6 rounded transition transform hover:scale-105'
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
