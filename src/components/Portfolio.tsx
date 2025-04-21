const projects = [
  { title: 'Project One', image: '/assets/project1.jpg', link: '#' },
  { title: 'Project Two', image: '/assets/project2.jpg', link: '#' },
  { title: 'Project Three', image: '/assets/project3.jpg', link: '#' },
];

export default function Portfolio() {
  return (
    <section id='portfolio' className='py-20 bg-gray-100'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-12'>Portfolio</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {projects.map((p) => (
            <a key={p.title} href={p.link} className='block group'>
              <div className='overflow-hidden rounded shadow-lg'>
                <img
                  src={p.image}
                  alt={p.title}
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
                />
                <div className='p-4 bg-white'>
                  <h3 className='text-xl font-semibold'>{p.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
