import { Fade, Slide } from 'react-awesome-reveal';

const projects = [
  {
    title: 'MyWalrusApp',
    image: '/assets/images/my-walrus-app.png',
    description: 'A React video service for hosting events built in Next.js',
  },
  {
    title: 'Unitra Portal',
    image: '/assets/images/unitraportal.svg',
    description:
      'A Remix-Run dashboard used to organize orders for translations',
  },
  {
    title: 'Blacktux',
    image: '/assets/images/blacktux.png',
    description: 'A staff management app built in React Native',
  },
];

export default function Portfolio() {
  return (
    <section id='portfolio' className='py-20 bg-amber-100'>
      <Fade triggerOnce className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-12'>Portfolio</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {projects.map((p) => (
            <Slide triggerOnce direction='up' damping={0.2} key={p.title}>
              <div className='group overflow-hidden rounded shadow-lg bg-amber-950'>
                <img
                  src={p.image}
                  alt={p.title}
                  className='w-full h-48 object-contain bg-amber-50 group-hover:scale-105 transition-transform duration-300'
                />
                <div className='p-4'>
                  <h3 className='text-xl text-white font-semibold mb-2'>
                    {p.title}
                  </h3>
                  <p className='text-white'>{p.description}</p>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </Fade>
    </section>
  );
}
