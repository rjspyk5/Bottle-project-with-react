import React from 'react';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='text-3xl font-black text-center py-8'>Bottle Er Dokan</h1>
    </div>
  );
};
