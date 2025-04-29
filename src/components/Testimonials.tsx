import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Andrew has outstanding work ethic and is someone you want with you when facing a difficult task. ',
    author: 'Edwin Pietrowski, Junior Fullstack Dev',
  },
  {
    quote:
      'Andrew is the kind of person you want on your team. He is dependable, caring, knowledgeable and an avid learner.',
    author: 'Ashley Gilbert, Administrative Manager',
  },
  {
    quote:
      '...Andrew showed a natural ability for problem solving, debugging and troubleshooting. He has consistently demonstrated his skills building web application in React.',
    author: 'Christian Vasquez, Full stack Developer',
  },
  {
    quote:
      'Andrew obsessed about learning and prided himself on not only getting the work done, but completing it with the highest quality.',
    author: 'Evan Arbeitman, Software Engineer',
  },
  {
    quote:
      "When the class was teaming up to do large-scale project work, Andrew was not only a coder but the de facto Project Manager. His teammates listened to him and followed his example; his team's projects were always delivered by deadline and to spec.",
    author: 'John Dougherty, Instructor @ Rutgers',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  // auto-advance every 5s
  useEffect(() => {
    const t = setTimeout(() => {
      setIdx((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(t);
  }, [idx]);

  const { quote, author } = testimonials[idx];

  const variants = {
    enter: { opacity: 0, x: 30 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <section id='testimonials' className='py-20 bg-amber-100'>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-4xl font-bold mb-8'>What Folks Are Saying</h2>
        <div className='relative max-w-2xl mx-auto h-[200px]'>
          <AnimatePresence initial={false} mode='wait'>
            <motion.div
              key={idx}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{ duration: 0.6 }}
              className='p-8 bg-white rounded shadow-lg'
            >
              <p className='text-lg italic mb-4'>“{quote}”</p>
              <p className='font-semibold'>— {author}</p>
            </motion.div>
          </AnimatePresence>

          {/* Prev/Next buttons */}
          <button
            aria-label='Previous testimonial'
            onClick={() =>
              setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
            }
            className='absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100'
          >
            ‹
          </button>
          <button
            aria-label='Next testimonial'
            onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
            className='absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100'
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
