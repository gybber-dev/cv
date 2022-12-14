import React from 'react';

const InfoBlock = ({ title, children }) => (
  <div className='w-full pb-4 text-simple'>
    <div className='w-full border-b-2 border-b-back pb-2 text-2xl mb-2 uppercase text-back'>{title}</div>
    {children}
  </div>
);

export default InfoBlock;
