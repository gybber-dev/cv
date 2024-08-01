import React from 'react';
import classNames from 'classnames';

const titles = {
  achievements: {
    ru: 'Достижения:',
    en: 'Achievements:',
  },
  technologies: {
    ru: 'Технологии:',
    en: 'Technologies used:'
  },
  portfolio: {
    ru: 'Портфолио:',
    en: 'Portfolio:',
  },
};

const JobBlock = ({
  isActive,
  position,
  company,
  from,
  to,
  achievements,
  tags,
  lang,
  portfolio = null,
}) => (
  <section className={classNames('-m-3 p-3 md:-m-6 md:p-6 transition-colors ease-in-out delay-100 cursor-pointer rounded-2xl', { 'bg-amber-300/50 hover:bg-amber-300/50': isActive, ' hover:bg-amber-300/20': !isActive })}>
    <div className='flex justify-between font-bold text-primary'>
      <div className='text-lg'>{position}</div>
      <div>{company}</div>
    </div>
    <div className='text-sm'>
      {`${from} - ${to}`}
    </div>
    <div className='font-semibold text-simple my-2'>{titles.achievements[lang]}</div>
    <div>
      {achievements}
    </div>
    <div className='font-semibold text-simple my-2'>{titles.technologies[lang]}</div>
    <div className='flex ml flex-wrap'>
      {tags.map((tag, index) => (
        <div key={index} className='flex justify-center items-center bg-primary text-white rounded-2xl px-2 py-0.5 mr-2 mb-1 last:mr-0 whitespace-nowrap'>{tag}</div>
      ))}
    </div>
    {portfolio && <>
      <div className='font-semibold text-simple my-2'>
        {titles.portfolio[lang]}
      </div>
      <a href={portfolio}>{portfolio}</a>
    </>}
  </section>
);

export default JobBlock;
