import React, { ReactNode } from 'react'
import classNames from 'classnames';
import { useTranslations } from 'next-intl'


export type Job = {
  position: string,
  company: string,
  from: string,
  to: string,
  achievements: string | ReactNode,
  tags: string[],
  portfolio?: string,
}
type Props = { isActive: boolean} & Job

const JobBlock = ({
  isActive,
  position,
  company,
  from,
  to,
  achievements,
  tags,
  portfolio = '',
}: Props) => {
  const t = useTranslations('Experience')

  return (
    <section className={classNames('-m-3 p-3 md:-m-6 md:p-6 transition-colors ease-in-out delay-100 cursor-pointer rounded-2xl', { 'bg-amber-300/50 hover:bg-amber-300/50': isActive, ' hover:bg-amber-300/20': !isActive })}>
      <div className='flex justify-between font-bold text-primary'>
        <div className='text-lg'>{position}</div>
        <div>{company}</div>
      </div>
      <div className='text-sm'>
        {`${from} - ${to}`}
      </div>
      <div className='font-semibold text-simple my-2'>{t('achievements')}</div>
      <div>
        {achievements}
      </div>
      <div className='font-semibold text-simple my-2'>{t('technologies')}</div>
      <div className='flex ml flex-wrap'>
        {tags.map((tag, index) => (
          <div key={index} className='flex justify-center items-center bg-primary text-white rounded-2xl px-2 py-0.5 mr-2 mb-1 last:mr-0 whitespace-nowrap'>{tag}</div>
        ))}
      </div>
      {portfolio && <>
        <div className='font-semibold text-simple my-2'>
          {t('portfolio')}
        </div>
        <a target='_blank' href={portfolio}>{portfolio}</a>
      </>}
    </section>
  );
}

export default JobBlock;
