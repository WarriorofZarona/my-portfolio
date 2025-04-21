export default function Header() {
  return (
    <header
      id='home'
      className='h-screen bg-cover bg-center bg-red-500'
      style={{
        backgroundImage: "url('/assets/images/header-bg-wide.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex items-center justify-center h-full bg-black/30'>
        <div className='text-center text-white px-4'>
          <h1 className='text-5xl md:text-7xl font-bold mb-4'>
            Welcome to My Portfolio
          </h1>
          <p className='text-xl mb-6'>
            I'm Andrew, a passionate React developer.
          </p>
          <a
            href='#about'
            className='bg-amber-900 hover:bg-amber-700 text-white py-2 px-6 rounded transition'
          >
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
}
