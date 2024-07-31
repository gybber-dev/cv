'use client'

import Image from 'next/image'
import InfoBlock from '../components/InfoBlock'
import JobBlock from '../components/JobBlock'
import SkillBlock from '../components/SkillBlock'
import EduBlock from '../components/EduBlock'
import ListBlock from '../components/ListBlock'
import { useState } from 'react'

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
          <p>Хорошая обучаемость, исполнительность, аналитическое мышление</p>
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
              <ol className="list-decimal">
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
      <header className="py-4 min-w-max bg-primary text-white">
        <div className="mx-auto flex w-full max-w-screen-lg px-4 gap-4">
          <div className='shrink-0 rounded-full overflow-hidden h-fit w-fit'>
            <Image width={160} height={160} src={'/assets/avatar.jpg'} alt="me" />
          </div>
          <div className="flex-1 mt-4">
            <div className=''>
              <h1 className="text-xl font-semibold uppercase tracking-wider md:text-2xl">
                {u.name}
              </h1>
              <h2 className="text-md mb-3 font-normal md:text-lg text-white/60">
                {u.position}
              </h2>
              <p className='text-sm text-white'>Some long long text Some long long text Some long long text Some long
                long text Some long long text Some long long text Some long long text Some long long text</p>
            </div>

          </div>
          <address className='ml-10'>
            <div>
              <p className="flex items-center text-white">
                <Image
                  width={20}
                  height={20}
                  src={'/assets/icons/envelope-icon.svg'}
                  alt="mail"
                  className="mr-1"
                />
                {u.mail}
              </p>

              <div className="flex items-center text-white">
                <Image
                  width={20}
                  height={20}
                  src={'/assets/icons/mobile-icon.svg'}
                  alt="phone"
                  className="mr-1"
                />
                {u.phone}
              </div>
            </div>
            <div className="my-2 flex">
              {u.contacts.telegram && (
                <a
                  className="mb-1 mr-2 flex items-center text-white"
                  href={u.contacts.telegram.link}
                >
                  <Image
                    src={'/assets/icons/telegram.svg'}
                    alt={'telegram'}
                    width={20}
                    height={20}
                  />
                </a>
              )}
              {u.contacts.in && (
                <a
                  className="mb-1 mr-2 flex items-center text-white"
                  href={u.contacts.in.link}
                >
                  <Image
                    width={20}
                    height={20}
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
                    width={20}
                    height={20}
                  />
                </a>
              )}
              {u.contacts.codeopen && (
                <div className="mb-1 mr-2 flex items-center text-white">
                  <Image
                    width={20}
                    height={20}
                    src={'/assets/icons/codepen-icon.svg'}
                    alt="codeopen"
                    className="mr-1 h-6 w-6"
                  />
                </div>
              )}
              {u.contacts.web && (
                <div className="mb-1 flex items-center text-white">
                  <Image
                    width={20}
                    height={20}
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
        className="m-auto block w-full p-4 md:col-span-2 md:grid md:grid-cols-[2fr_1fr] md:grid-rows-[auto_5fr] md:p-8 lg:w-[1024px]">
        <div className="col-start-1 col-end-[-1]">
          <InfoBlock title={u.summary.title[lang]}>
            {u.summary.content[lang]}
          </InfoBlock>
        </div>
        <InfoBlock title={u.experience.title[lang]}>
          {u.experience.content[lang].map((job, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveJob((prevState) =>
                  prevState?.company === job.company ? null : job
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
        <div className="md:pl-4">
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
