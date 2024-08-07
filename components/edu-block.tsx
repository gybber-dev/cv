import React from 'react';

export type EducationType = {
  place: string;
  spec: string;
  period: string;
}

const EduBlock = ({
  spec, place, period,
}: EducationType) => (
  <section className='py-1'>
    <div className='font-semibold text-simple leading-5 py-1'>{spec}</div>
    <div className='text-sm'>{place}</div>
    <div className='text-xs pt-1'>{period}</div>
  </section>
);

export default EduBlock;
