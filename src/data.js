import React from 'react';

const data = {
  lang: 'ru', // ru | en
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
      link: 'https://linkedin.com/in/azat-faezov-aa9400252'
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
      ru: (<>
        <p>Думаю, одно из ключевых моих качеств - это стремление разобраться в сути дела и умение задаваться нетривиальными вопросами. Зачастую это приводит к появлению нестандартных решений.</p>
        <p>Хорошая обучаемость, исполнительность, аналитическое мышление</p>
      </>),
      en: 'content'
    }
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
          achievements: (<>
            <p>Фронтовая часть криптобиржи. Занимался переводом проекта с VueJS на NextJS. Стэк: React-Redux-TypeScript-Vue. </p>
            <p>Получил ценный опыт запуска приложения &apos;с нуля&apos;, подтянул знания в стэке React-Redux, познакомился с фреймворком NextJS</p>
          </>),
          tags: ['React', 'Redux', 'Redux Toolkit', 'TypeScript', 'NextJS', 'VueJS'],
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
          achievements: (<>
            <p>Работал в двух проектах:</p>
            <ol className='list-decimal'>
              <li>Разработка web-приложения для мониторинга внутренних показателей компании. Стэк: React-Redux(RTK)-TypeScript. Получил опыт корпоративного взаимодействия, Agile/Jira. Перевел проект с классического Redux на RTK</li>
              <li>Разработка web-приложения для работы с большим количеством статистической информации. Стэк: React-MobX-TypeScript. Получил опыт организации архитектуры проекта, работающего с большим количеством данных. Осуществил типизацию основных узлов приложения и перевод устаревших компонентов на TypeScript.</li>
            </ol>

          </>),
          tags: ['React', 'Redux', 'Redux Toolkit', 'TypeScript', 'MobX', 'Ajile/Jira'],
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
          achievements: 'Занимался заполнением каталогов товаров для платформ Яндекс.Маркет и Беру. Во время работы писал скрипты на JavaScript, которые автоматизировали значительную часть рутинной работы операторов.',
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
          portfolio: 'https://github.com/gybber-dev/JavaScript-projects/tree/master/JS',
        },
      ],
      en: [],
    }
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
          ]
        }
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
            'Ajile'
          ]
        }
      ],
    }
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
      en: 'content'
    }
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
          comment: '(родной)'
        },
        {
          name: 'Английский',
          comment: '(продвинутый)'
        },
      ],
      en: [
        {
          name: 'Russian',
          comment: '(native)'
        },
        {
          name: 'English',
          comment: 'B2'
        },
      ],
    }
  },
  interests: {
    title: {
      ru: 'Интересы',
      en: 'Interests',
    },
    content: {
      ru: [
        { name: 'Сноубординг' },
        { name: 'Туризм' },
      ],
      en: 'content'
    }
  }
};

export default data;
