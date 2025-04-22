export default function CallToAction() {
  return (
    <section className='py-20 bg-amber-900 text-white text-center'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-4xl font-bold mb-4'>Ready to work together?</h2>
        <a
          href='#contact'
          className='bg-white text-amber-900 py-3 px-8 rounded font-semibold hover:bg-amber-100 transition'
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
