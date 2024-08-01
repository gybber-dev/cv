import React from 'react';

const InfoBlock = ({ title, children }) => (
  <section className='w-full text-simple'>
    <h3 className='w-full border-b-2 border-b-primary pb-2 text-2xl mb-4 uppercase text-primary'>{title}</h3>
    {children}
  </section>
);

export default InfoBlock;
