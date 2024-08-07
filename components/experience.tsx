'use client'

import InfoBlock from '@components/info-block'
import JobBlock, { Job } from '@components/job-block'
import SkillsBlock from '@components/skills-block'
import EduBlock, { EducationType } from '@components/edu-block'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

const skills = {
  baseSkills: [
    { name: 'JavaScript', totalProgress: 95, jobsProgress: [4, 10, 6] },
    { name: 'TypeScript', totalProgress: 70, jobsProgress: [0, 6, 10] },
    { name: 'React', totalProgress: 90, jobsProgress: [0, 5, 8] },
    { name: 'NodeJS', totalProgress: 85, jobsProgress: [0, 5, 20] },
    { name: 'Redux', totalProgress: 80, jobsProgress: [0, 6, 2] },
    { name: 'NextJS', totalProgress: 90, jobsProgress: [0, 0, 5] },
    { name: 'MobX', totalProgress: 40, jobsProgress: [0, 5, 0] },
    { name: 'Tailwind', totalProgress: 95, jobsProgress: [0, 0, 5] },
    { name: 'HTML/CSS', totalProgress: 90, jobsProgress: [20, 50, 30] },
  ],
  otherSkills: [
    'Git',
    'Linux',
    'Python',
    'SQL',
    'Docker/Docker-compose',
    'Headless',
    'Telegram bots',
    'Ajile',
  ],
}

const Experience = () => {
  const [activeJob, setActiveJob] = useState<number | undefined>()
  const lang = 'ru'
  const t = useTranslations('Experience')
  const jobs: Job[] = [
    {
      position: t('position-1'),
      company: t('company-1'),
      from: t('from-1'),
      to: t('to-1'),
      achievements: t('achievements-1'),
      tags: ['JavaScript', 'Headless', 'Parsers'],
      portfolio: 'https://github.com/gybber-dev/JavaScript-projects/tree/master/JS',
    },
    {
      position: t('position-2'),
      company: t('company-2'),
      from: t('from-2'),
      to: t('to-2'),
      achievements: (
        <>
          <p>{t('achievements-2-1')}</p>
          <ol className="list-inside list-decimal space-y-2">
            <li>{t('achievements-2-2')}</li>
            <li>{t('achievements-2-3')}</li>
          </ol>
        </>
      ),
      tags: ['React', 'Redux', 'Redux Toolkit', 'TypeScript', 'MobX', 'Ajile/Jira'],
    },
    {
      position: t('position-3'),
      company: t('company-3'),
      from: t('from-3'),
      to: t('to-3'),
      achievements: t('achievements-3'),
      tags: ['React', 'Redux', 'Redux Toolkit', 'TypeScript', 'NextJS', 'VueJS'],
    },
  ]
  const education: EducationType[] = [
    {
      spec: t('education-1'),
      place: t('education-place-1'),
      period: '2020 - 2022',
    },
    {
      spec: t('education-2'),
      place: t('education-place-2'),
      period: '2019',
    },
    {
      spec: t('education-3'),
      place: t('education-place-3'),
      period: '2008 - 2013',
    },
  ]
  const languages = [
    {
      name: t('languageName-1'),
      comment: t('languageComment-1'),
    },
    {
      name: t('languageName-2'),
      comment: t('languageComment-2'),
    },
  ]
  const interests = [{ name: t('interest-1') }, { name: t('interest-2') }]
  return (
    <div className="cols-span-1 m-auto grid w-full gap-12 p-4 md:col-span-2 md:grid-cols-[2fr_1fr] md:grid-rows-[auto_5fr] md:p-8 lg:w-[1024px]">
      <InfoBlock title={t('title')}>
        <div className="-mt-4 flex flex-col-reverse">
          {jobs.map((job, index) => (
            <div key={index} className="my-8" onClick={() => setActiveJob(index)}>
              <JobBlock isActive={activeJob === index} {...job} />
            </div>
          ))}
        </div>
      </InfoBlock>
      <div className="space-y-8">
        {skills && (
          <InfoBlock title={t('skills')}>
            <SkillsBlock
              activeJobIndex={activeJob}
              baseSkills={skills.baseSkills}
              otherSkills={skills.otherSkills}
            />
          </InfoBlock>
        )}
        {education.length > 0 && (
          <InfoBlock title={t('education')}>
            {education.map((edu, index) => (
              <EduBlock key={index} {...edu} />
            ))}
          </InfoBlock>
        )}
        {languages.length > 0 && (
          <InfoBlock title={t('languages')}>
            <ul>
              {languages.map((item) => (
                <li className="flex" key={item.name}>
                  <span className="font-semibold">{item.name}</span>
                  {item.comment && <span className="ml-1">{item.comment}</span>}
                </li>
              ))}
            </ul>
          </InfoBlock>
        )}
        {interests.length > 0 && (
          <InfoBlock title={t('interests')}>
            {interests.map((item) => (
              <li className="font-semibold" key={item.name}>
                {item.name}
              </li>
            ))}
          </InfoBlock>
        )}
      </div>
    </div>
  )
}

export default Experience
