const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Building responsive, high-performance websites.',
  },

  {
    icon: '🚀',
    title: 'Performance Optimization',
    description: 'Making React apps load fast and run smoothly.',
  },
  {
    icon: '🔌',
    title: 'API Development & Integration',
    description:
      'Building robust RESTful and GraphQL endpoints, integrating third‑party services (Stripe, Auth0,) and making data flow seamlessly.',
  },
  {
    icon: '🔒 ',
    title: 'Authentication & Security',
    description:
      'Implementing JWT‑based auth flows, refresh‑token lifecycles, OAuth integrations, and session management in Remix or Next.',
  },
  {
    icon: '📱',
    title: 'React Native Mobile Development',
    description:
      'Shipping cross‑platform (iOS/Android) apps with smooth navigation, contact‑permission flows, and native‑feel UI.',
  },
  {
    icon: '🤝 ',
    title: 'Code Reviews & Mentorship',
    description:
      'Pair‑programming sessions, architectural consults, and bootcamp‑style tutoring on React, TypeScript, GraphQL—and everything in between.',
  },
];

export default function Services() {
  return (
    <section id='services' className='py-20 bg-amber-900 text-white'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center mb-12'>Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((s) => (
            <div
              key={s.title}
              className='text-center p-6 border rounded hover:shadow-lg transition'
            >
              <div className='mb-4 text-5xl'>{s.icon}</div>
              <h3 className='text-2xl font-semibold mb-2'>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
