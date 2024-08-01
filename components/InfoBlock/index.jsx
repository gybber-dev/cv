import React from 'react';

const InfoBlock = ({ title, children }) => (
  <div className='w-full text-simple'>
    <div className='w-full border-b-2 border-b-primary pb-2 text-2xl mb-4 uppercase text-primary'>{title}</div>
    {children}
  </div>
);

export default InfoBlock;
