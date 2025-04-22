import { Fade } from 'react-awesome-reveal';

export default function About() {
  return (
    <section id='about' className='py-20 bg-amber-100'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center gap-12'>
        {/* Text column */}
        <div className='md:w-1/2 space-y-6'>
          <Fade triggerOnce>
            <h2 className='text-4xl font-bold'>About Me</h2>
            <p className='leading-relaxed text-gray-700 text-xl'>
              I’m a Full‑Stack JavaScript engineer with 5+ years of hands‑on
              experience building React front‑ends, architecting Node.js/Express
              backends, and gluing it all together with RESTful APIs and
              GraphQL. I thrive on TypeScript safety, test‑driven development,
              and performance optimizations that keep UIs snappy and
              maintainable.
            </p>
            <a
              href='#services'
              className='inline-block bg-amber-900 text-white py-2 px-6 rounded hover:bg-blue-600 transition'
            >
              What I Do →
            </a>
          </Fade>
        </div>

        {/* Image column */}
        <Fade triggerOnce className='md:w-1/2 flex justify-center'>
          <img
            src='/assets/images/about-img.png'
            alt='Headshot of Andrew Bautista'
            className='w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg'
          />
        </Fade>
      </div>
    </section>
  );
}
