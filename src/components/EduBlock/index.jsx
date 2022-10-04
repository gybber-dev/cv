import React from 'react';

const EduBlock = ({
  spec, name, period,
}) => (
  <div className='py-1'>
    <div className='font-semibold text-simple leading-5 py-1'>{spec}</div>
    <div className='text-sm'>{name}</div>
    <div className='text-xs pt-1'>{period}</div>
  </div>
);

export default EduBlock;
