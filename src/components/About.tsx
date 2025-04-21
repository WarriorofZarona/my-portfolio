export default function About() {
  return (
    <section id='about' className='py-20 bg-gray-100'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <h2 className='text-4xl font-bold mb-4'>About Me</h2>
          <p className='mb-4'>
            I’m a Full-Stack JavaScript engineer with 5+ years of experience
            building React applications, scalable backends, and engaging UIs.
          </p>
          <a href='#services' className='text-blue-500 hover:underline'>
            What I do &rarr;
          </a>
        </div>
        <div className='md:w-1/2'>
          {/* Professional photo of myself */}
          <img
            src='/assets/about-img.jpg'
            alt='About me'
            className='rounded shadow-lg'
          />
        </div>
      </div>
    </section>
  );
}
