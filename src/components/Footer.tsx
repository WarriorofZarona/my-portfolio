export default function Footer() {
  return (
    <footer className='py-6 bg-gray-800 text-white text-center'>
      <div className='container mx-auto px-6'>
        <p>
          &copy; {new Date().getFullYear()} Andrew Bautista. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
