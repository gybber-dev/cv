import React from 'react';
import classNames from 'classnames';

const SkillBlock = ({
  title, type, items, progress,
}) => (
  <div>
    <div className='font-semibold text-simple my-2 mt-4 pt-2'>{title}</div>
    {items && <div className={classNames({ 'flex flex-wrap': type === 'other' })}>
      {items.map((item, index) => {
        const skillUp = progress?.find(skill => skill.name === item.name);

        if (type === 'base') {
          return (
            <div key={index} className='mb-2 text-sm'>
              <div>{item.name}</div>
              <div className='relative w-full h-2 bg-shade rounded'>
                <div className='absolute h-full bg-primary rounded' style={{width: `${item.value}%`}} />
                <div className='absolute h-full rounded bg-amber-300/80 transition-[width] ease-in-out duration-500 '
                  style={{ width: `${skillUp?.value || 0}%`, right: `${100 - item.value}%`}}/>
              </div>
            </div>);
        }
        return (<div key={index} className='mr-1 mb-1 last:ml-0 px-2 bg-shade rounded '>
          {item.name}
        </div>);
      })}
    </div>}
  </div>
);

export default SkillBlock;
