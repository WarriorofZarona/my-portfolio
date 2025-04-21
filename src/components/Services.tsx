const services = [
  {
    title: 'Web Development',
    description: 'Building responsive, high-performance websites.',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive and engaging user interfaces.',
  },
  {
    title: 'Performance Optimization',
    description: 'Making React apps load fast and run smoothly.',
  },
];

export default function Services() {
  return (
    <section id='services' className='py-20'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-12'>Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((s) => (
            <div
              key={s.title}
              className='text-center p-6 border rounded hover:shadow-lg transition'
            >
              <div className='mb-4 text-5xl'>💻</div>
              <h3 className='text-2xl font-semibold mb-2'>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
