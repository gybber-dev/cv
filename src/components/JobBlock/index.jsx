import React from 'react';

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
  position,
  company,
  from,
  to,
  achievements,
  tags,
  lang,
  portfolio = null,
}) => (
  <section className='p-4 pb-6'>
    <div className='flex justify-between font-bold text-back'>
      <div className='text-lg'>{position}</div>
      <div>{company}</div>
    </div>
    <div className='text-sm'>
      {`${from} - ${to}`}
    </div>
    <div className='subtitle'>{titles.achievements[lang]}</div>
    <div>
      {achievements}
    </div>
    <div className='subtitle'>{titles.technologies[lang]}</div>
    <div className='flex ml'>
      {tags.map((tag, index) => (
        <div key={index} className='flex justify-center items-center bg-back text-white rounded-2xl px-2 py-0.5 mr-2 last:mr-0'>{tag}</div>
      ))}
    </div>
    {portfolio && <>
      <div className='subtitle'>
        {titles.portfolio[lang]}
      </div>
      <a href={portfolio}>{portfolio}</a>
    </>}
  </section>
);

export default JobBlock;
