import { Fade } from 'react-awesome-reveal';

export default function Contact() {
  return (
    <section id='contact' className='py-20 text-white bg-amber-900'>
      <Fade triggerOnce>
        <div className='container mx-auto px-6 max-w-lg'>
          <h2 className='text-4xl font-bold text-center mb-8'>Contact Me</h2>
          <form name='contact' method='post' className='space-y-4'>
            <input type='hidden' name='form-name' value='contact' />
            <div>
              <label className='block mb-1'>Name</label>
              <input
                type='text'
                name='name'
                className='w-full border rounded px-3 py-2'
                required
              />
            </div>
            <div>
              <label className='block mb-1'>Email</label>
              <input
                type='email'
                name='email'
                className='w-full border rounded px-3 py-2'
                required
              />
            </div>
            <div>
              <label className='block mb-1'>Message</label>
              <textarea
                name='message'
                rows={5}
                className='w-full border rounded px-3 py-2'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-amber-100 text-amber-900 py-2 px-6 rounded hover:bg-amber-50 transition'
            >
              Send Message
            </button>
          </form>
        </div>
      </Fade>
    </section>
  );
}
