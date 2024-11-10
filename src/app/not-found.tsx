import React from 'react';
import './css/404.css'
import Link from 'next/link';

const page = () => {
  return (
    <div className='container'>
      <h1 className='title'>404</h1>
      <p className='message'>Oops! Page not found.</p>
      <Link href="/" className='link'>Go back to Home</Link>
    </div>
  );
};

export default page;
