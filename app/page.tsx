'use client'

import Image from 'next/image'
import InfoBlock from '../components/InfoBlock'
import JobBlock from '../components/JobBlock'
import SkillBlock from '../components/SkillBlock'
import EduBlock from '../components/EduBlock'
import ListBlock from '../components/ListBlock'
import { useState } from 'react'
import CopyButton from '../components/ui/button-copy'

const u = {
  name: 'Азат Фаезов',
  position: 'Frontend developer',
  mail: 'az.faezov@gmail.com',
  phone: '+7 707 350 64 45',
  contacts: {
    telegram: {
      title: '@Gybber',
      link: 'https://t.me/Gybber',
    },
    in: {
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/azat-faezov-aa9400252',
    },
    github: {
      title: 'GitHub',
      link: 'https://github.com/gybber-dev',
    },
    codeopen: '',
    web: '',
  },
  summary: {
    title: {
      ru: 'Обо мне',
      en: 'Career Summary',
    },
    content: {
      ru: (
        <>
          <p>
            Думаю, одно из ключевых моих качеств - это стремление разобраться в
            сути дела и умение задаваться нетривиальными вопросами. Зачастую это
            приводит к появлению нестандартных решений.
          </p>
          {/*<p>Хорошая обучаемость, исполнительность, аналитическое мышление</p>*/}
        </>
      ),
      en: 'content',
    },
  },
  experience: {
    title: {
      ru: 'Опыт работы',
      en: 'Work experience',
    },
    content: {
      ru: [
        {
          position: 'Frontend-разработчик',
          company: 'Crontech',
          from: 'сентябрь 2022',
          to: 'н.в.',
          achievements: (
            <>
              <p>
                Фронтовая часть криптобиржи. Занимался переводом проекта с VueJS
                на NextJS. Стэк: React-Redux-TypeScript-Vue.{' '}
              </p>
              <p>
                Получил ценный опыт запуска приложения &apos;с нуля&apos;,
                подтянул знания в стэке React-Redux, познакомился с фреймворком
                NextJS
              </p>
            </>
          ),
          tags: [
            'React',
            'Redux',
            'Redux Toolkit',
            'TypeScript',
            'NextJS',
            'VueJS',
          ],
          progress: [
            {
              name: 'JavaScript',
              value: 5,
            },
            {
              name: 'TypeScript',
              value: 10,
            },
            {
              name: 'React',
              value: 5,
            },
            {
              name: 'Redux',
              value: 10,
            },
            {
              name: 'Redux Toolkit',
              value: 10,
            },
            {
              name: 'NextJS',
              value: 50,
            },
            {
              name: 'Tailwind',
              value: 80,
            },
            {
              name: 'HTML/CSS/SASS',
              value: 10,
            },
          ],
        },
        {
          position: 'Frontend-разработчик',
          company: 'Сбербанк',
          from: 'июнь 2021',
          to: 'октябрь 2022',
          achievements: (
            <>
              <p>Работал в двух проектах:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Разработка web-приложения для мониторинга внутренних
                  показателей компании. Стэк: React-Redux(RTK)-TypeScript.
                  Получил опыт корпоративного взаимодействия, Agile/Jira.
                  Перевел проект с классического Redux на RTK
                </li>
                <li>
                  Разработка web-приложения для работы с большим количеством
                  статистической информации. Стэк: React-MobX-TypeScript.
                  Получил опыт организации архитектуры проекта, работающего с
                  большим количеством данных. Осуществил типизацию основных
                  узлов приложения и перевод устаревших компонентов на
                  TypeScript.
                </li>
              </ol>
            </>
          ),
          tags: [
            'React',
            'Redux',
            'Redux Toolkit',
            'TypeScript',
            'MobX',
            'Ajile/Jira',
          ],
          progress: [
            {
              name: 'JavaScript',
              value: 50,
            },
            {
              name: 'TypeScript',
              value: 60,
            },
            {
              name: 'React',
              value: 75,
            },
            {
              name: 'Redux',
              value: 60,
            },
            {
              name: 'Redux Toolkit',
              value: 40,
            },
            {
              name: 'MobX',
              value: 50,
            },
            {
              name: 'NodeJS',
              value: 50,
            },
            {
              name: 'HTML/CSS/SASS',
              value: 50,
            },
          ],
        },
        {
          position: 'Оператор группы ввода данных',
          company: 'Яндекс',
          from: 'август 2014',
          to: 'август 2020',
          achievements:
            'Занимался заполнением каталогов товаров для платформ Яндекс.Маркет и Беру. Во время работы писал скрипты на JavaScript, которые автоматизировали значительную часть рутинной работы операторов.',
          tags: ['JavaScript', 'Headless', 'Parsers'],
          progress: [
            {
              name: 'JavaScript',
              value: 35,
            },
            {
              name: 'HTML/CSS/SASS',
              value: 20,
            },
          ],
          portfolio:
            'https://github.com/gybber-dev/JavaScript-projects/tree/master/JS',
        },
      ],
      en: [],
    },
  },
  skills: {
    title: {
      ru: 'Навыки',
      en: 'Skills & tools',
    },
    content: {
      ru: [
        {
          title: 'Frontend',
          type: 'base',
          items: [
            {
              name: 'JavaScript',
              value: 90,
            },
            {
              name: 'TypeScript',
              value: 70,
            },
            {
              name: 'React',
              value: 80,
            },
            {
              name: 'Redux',
              value: 70,
            },
            {
              name: 'Redux Toolkit',
              value: 50,
            },
            {
              name: 'NextJS',
              value: 50,
            },
            {
              name: 'MobX',
              value: 50,
            },
            {
              name: 'NodeJS',
              value: 50,
            },
            {
              name: 'Tailwind',
              value: 80,
            },
            {
              name: 'HTML/CSS/SASS',
              value: 80,
            },
          ],
        },
        {
          title: 'Others',
          type: 'other',
          items: [
            { name: 'Git' },
            { name: 'Linux' },
            { name: 'Python' },
            { name: 'SQL' },
            { name: 'Docker/Docker-compose' },
            { name: 'Headless' },
            { name: 'Telegram bots' },
            { name: 'Ajile' },
          ],
        },
      ],
      en: [
        {
          title: 'Frontend',
          type: 'base',
          items: [
            {
              name: 'JavaScript',
              value: 90,
            },
            {
              name: 'TypeScript',
              value: 70,
            },
            {
              name: 'React',
              value: 80,
            },
            {
              name: 'Redux',
              value: 70,
            },
            {
              name: 'Redux Toolkit',
              value: 50,
            },
            {
              name: 'MobX',
              value: 50,
            },
            {
              name: 'NodeJS',
              value: 50,
            },
            {
              name: 'HTML/CSS/SASS',
              value: 80,
            },
          ],
        },
        {
          title: 'Others',
          type: 'other',
          items: [
            'Git',
            'Linux',
            'Python',
            'SQL',
            'Docker/Docker-compose',
            'Headless',
            'Telegram bots',
            'Ajile',
          ],
        },
      ],
    },
  },
  edu: {
    title: {
      ru: 'Образование',
      en: 'Education',
    },
    content: {
      ru: [
        {
          spec: 'Computer science',
          name: 'Школа 21 (Сбребанк)',
          period: '2020 - 2022',
        },
        {
          spec: 'Machine Learning',
          name: 'Coursera (Andrew Ng, Stanford University)',
          period: '2019',
        },
        {
          spec: 'Автоматизация производственных процессов (средний балл: 4.95)',
          name: 'Уфимский государственный нефтяной технический университет',
          period: '2008 - 2013',
        },
      ],
      en: [],
    },
  },
  languages: {
    title: {
      ru: 'Языки',
      en: 'Languages',
    },
    content: {
      ru: [
        {
          name: 'Русский',
          comment: '(родной)',
        },
        {
          name: 'Английский',
          comment: '(продвинутый)',
        },
      ],
      en: [
        {
          name: 'Russian',
          comment: '(native)',
        },
        {
          name: 'English',
          comment: 'B2',
        },
      ],
    },
  },
  interests: {
    title: {
      ru: 'Интересы',
      en: 'Interests',
    },
    content: {
      ru: [{ name: 'Сноубординг' }, { name: 'Туризм' }],
      en: [],
    },
  },
}

export default function Home() {
  const [activeJob, setActiveJob] = useState<any>(null)
  const [lang, setLang] = useState('ru')

  return (
    <main className="h-screen overflow-y-auto">
      <header className="bg-primary py-5 text-white">
        <div className="mx-auto grid grid-cols-[1fr] sm:grid-cols-[2fr_1fr] w-full max-w-screen-lg gap-x-10 px-8">
          <div className="sm:col-span-2 ml-auto pl-8">EN</div>
          <div className='flex gap-8 items-center'>
            <div className="hidden md:my-5 h-fit w-fit shrink-0 overflow-hidden rounded-full sm:block">
              <Image
                className="h-[100px] w-[100px] md:h-[160px] md:w-[160px]"
                width={160}
                height={160}
                src={'/assets/avatar.jpg'}
                alt="me"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:gap-8 md:mt-3 lg:gap-16">
                <div className="">
                  <h1 className="text-xl font-semibold uppercase tracking-wider md:text-2xl">
                    {u.name}
                  </h1>
                  <h2 className="text-md mb-3 font-normal text-white/60 md:text-lg">
                    {u.position}
                  </h2>
                  <div className="hidden text-sm text-white md:block">
                    {u.summary.content[lang]}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <address className="shrink-0 sm:mt-6 sm:ml-auto text-sm md:text-base">
              <div className="space-y-2">
                <p className="flex items-center text-white">
                  <Image
                    width={20}
                    height={20}
                    src={'/assets/icons/email.svg'}
                    alt="mail"
                    className="mr-2"
                  />
                  <CopyButton copyText={u.mail} className="hover:underline">
                    {u.mail}
                  </CopyButton>
                </p>

                <p className="flex items-center text-white">
                  <Image
                    width={20}
                    height={20}
                    src={'/assets/icons/phone.svg'}
                    alt="phone"
                    className="mr-1"
                  />
                  <a className="hover:underline" href={`tel:${u.phone}`}>
                    {u.phone}
                  </a>
                </p>
              </div>
              <div className="my-2 flex gap-2">
                {u.contacts.telegram && (
                  <CopyButton
                    className="mb-1 flex items-center text-white"
                    title={u.contacts.telegram.title}
                    copyText={u.contacts.telegram.title}
                  >
                    <Image
                      src={'/assets/icons/telegram.svg'}
                      alt={'telegram'}
                      width={24}
                      height={24}
                    />
                  </CopyButton>
                )}
                {u.contacts.in && (
                  <a
                    className="mb-1 flex items-center text-white"
                    href={u.contacts.in.link}
                  >
                    <Image
                      width={24}
                      height={24}
                      src={'/assets/icons/linkedin-icon.svg'}
                      alt="icon"
                      className="mr-1 h-6 w-6"
                    />
                  </a>
                )}
                {u.contacts.github && (
                  <a
                    className="mb-1 mr-2 flex items-center text-white"
                    href={u.contacts.github.link}
                  >
                    <Image
                      src={'/assets/icons/github-icon.svg'}
                      alt={'github'}
                      width={24}
                      height={24}
                    />
                  </a>
                )}
                {u.contacts.codeopen && (
                  <div className="mb-1 mr-2 flex items-center text-white">
                    <Image
                      width={24}
                      height={24}
                      src={'/assets/icons/codepen-icon.svg'}
                      alt="codeopen"
                      className="mr-1 h-6 w-6"
                    />
                  </div>
                )}
                {u.contacts.web && (
                  <div className="mb-1 flex items-center text-white">
                    <Image
                      width={24}
                      height={24}
                      src={'/assets/icons/website-icon.svg'}
                      alt="web"
                      className="mr-1 h-6 w-6"
                    />
                  </div>
                )}
              </div>
            </address>
        </div>
      </header>
      <div
        className="m-auto grid cols-span-1 w-full p-4 md:col-span-2 md:grid-cols-[2fr_1fr] md:grid-rows-[auto_5fr] gap-10 md:p-8 lg:w-[1024px]">
        {/*<div className="col-start-1 col-end-[-1]">*/}
        {/*  <InfoBlock title={u.summary.title[lang]}>*/}

        {/*  </InfoBlock>*/}
        {/*</div>*/}
        <InfoBlock title={u.experience.title[lang]}>
          {u.experience.content[lang].map((job, index) => (
            <div
              key={index}
              className="my-8"
              onClick={() =>
                setActiveJob((prevState) =>
                  prevState?.company === job.company ? null : job,
                )
              }
            >
              <JobBlock
                isActive={activeJob?.company === job.company}
                lang={lang}
                {...job}
              />
            </div>
          ))}
        </InfoBlock>
        <div className="space-y-8">
          {u.skills.content[lang] && (
            <InfoBlock title={u.skills.title[lang]}>
              {u.skills.content[lang].map((skill) => (
                <SkillBlock
                  key={skill.title}
                  {...skill}
                  progress={activeJob?.progress}
                />
              ))}
            </InfoBlock>
          )}
          {u.edu.content[lang] && (
            <InfoBlock title={u.edu.title[lang]}>
              {u.edu.content[lang].map((edu, index) => (
                <EduBlock key={index} {...edu} />
              ))}
            </InfoBlock>
          )}
          {u.languages.content[lang]?.length > 0 && (
            <InfoBlock title={u.languages.title[lang]}>
              <ListBlock list={u.languages.content[lang]} />
            </InfoBlock>
          )}
          {u.interests.title[lang]?.length > 0 && (
            <InfoBlock title={u.interests.title[lang]}>
              <ListBlock list={u.interests.content[lang]} />
            </InfoBlock>
          )}
        </div>
      </div>
    </main>
  )
}
