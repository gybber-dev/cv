import React from 'react';

const List = ({ list }) => {
  if (! list?.length ) {
    return null;
  }
  return (
    <div>
      {list.map(item => {
        return (
          <div className='flex' key={item.name}>
            <div className='font-semibold'>{item.name}</div>
            {item.comment && <div className='ml-1'>{item.comment}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default List;
