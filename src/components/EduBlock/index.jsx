import React from 'react';

const EduBlock = ({
  spec, name, period,
}) => (
  <div>
    <div className='font-semibold text-simple'>{spec}</div>
    <div className='text-sm'>{name}</div>
    <div className='text-xs'>{period}</div>
  </div>
);

export default EduBlock;
