import React from 'react';

const SkillBlock = ({
  title, type, items
}) => (
  <div>
    <div className='subtitle mt-4 pt-2'>{title}</div>
    {items && <div className={type === 'other' ? 'flex flex-wrap' : ''}>
      {items.map((item, index) => {
        if (type === 'base') {
          return (
            <div key={index} className='mb-2 text-sm'>
              <div>{item.name}</div>
              <div className='relative w-full h-2 bg-shade rounded'>
                <div className={'absolute h-full bg-back rounded'} style={{width: `${item.value}%`}} />
              </div>
            </div>);
        }
        return (<div key={index} className='mr-1 mb-1 last:ml-0 px-2 bg-shade rounded '>
          {item}
        </div>);
      })}
    </div>}
  </div>
);

export default SkillBlock;
