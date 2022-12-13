import './App.scss';
import React, {useEffect, useState} from 'react';
import u from './data';
import mailIcon from './assets/envelope-icon.svg';
import avatar from './assets/avatar.jpg';
import phoneIcon from './assets/mobile-icon.svg';
import inIcon from './assets/linkedin-icon.svg';
import codeopenIcon from './assets/codepen-icon.svg';
import webIcon from './assets/website-icon.svg';
import InfoBlock from './components/InfoBlock';
import { ReactComponent as TelegramIcon } from './assets/telegram.svg';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';
import JobBlock from './components/JobBlock';
import SkillBlock from './components/SkillBlock';
import EduBlock from './components/EduBlock';
import ListBlock from './components/ListBlock';
import { useSearchParams } from 'react-router-dom';

const App = () => {
  const [activeJob, setActiveJob] = useState(null);
  const [lang, setLang] = useState('ru');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const newLang = searchParams.get('lang');
    if (newLang) {
      setLang(newLang);
    }
  }, []);

  return (
    <div className='h-screen'>
      <header className='bg-back h-[160px] min-w-max'>
        <div className='flex m-auto w-full lg:w-[1024px]'>
          <img className='h-[160px]' src={avatar} alt="me"/>
          <div className='flex text-white justify-between pl-4 pr-8 py-2 infoWrapper'>
            <div className='mr-4'>
              <div className='text-2xl uppercase font-semibold tracking-wider'>{u.name}</div>
              <div className='text-lg mb-2'>{u.position}</div>
              <div className='flex text-white items-center'>
                <img src={mailIcon} alt='mail' className='mr-1' />
                {u.mail}
              </div>
              <div className='flex text-white items-center'>
                <img src={phoneIcon} alt='phone' className='mr-1' />
                {u.phone}
              </div>
              {u.contacts.telegram && <a className='flex text-white items-center' href={u.contacts.telegram.link}>
                <TelegramIcon className='mr-1' />
                {u.contacts.telegram.title}
              </a>}
            </div>
            <div className='pt-8'>
              {u.contacts.in && <a className='flex text-white items-center mb-1' href={u.contacts.in.link}>
                <img src={inIcon} alt='icon' className='mr-1' />
                {u.contacts.in.title}
              </a>}
              {u.contacts.github && <a className='flex text-white items-center mb-1' href={u.contacts.github.link}>
                <GithubIcon className='mr-1' />
                {u.contacts.github.title}
              </a>}
              {u.contacts.codeopen && <div className='flex text-white items-center mb-1'>
                <img src={codeopenIcon} alt='codeopen' className='mr-1' />
                {u.contacts.codeopen}
              </div>}
              {u.contacts.web && <div className='flex text-white items-center mb-1'>
                <img src={webIcon} alt='web' className='mr-1' />
                {u.contacts.web}
              </div>}
            </div>
          </div>
        </div>
      </header>
      <div className='p-8 block md:grid md:grid-cols-[2fr_1fr] md:grid-rows-[auto_5fr] md:col-span-2 m-auto w-full lg:w-[1024px]'>
        <div className='col-start-1 col-end-[-1]'>
          <InfoBlock title={u.summary.title[lang]}>
            {u.summary.content[lang]}
          </InfoBlock>
        </div>
        <InfoBlock title={u.experience.title[lang]}>
          {u.experience.content[lang].map((job, index) => (
            <div key={index} onClick={() => setActiveJob(prevState => prevState?.company === job.company ? null : job)}>
              <JobBlock
                isActive={activeJob?.company === job.company}
                lang={lang}
                {...job}
              />
            </div>
          ))
          }
        </InfoBlock>
        <div className='md:pl-4'>
          {u.skills.content[lang] && <InfoBlock title={u.skills.title[lang]}>
            {u.skills.content[lang].map(skill => (
              <SkillBlock key={skill.title} {...skill} progress={activeJob?.progress} />
            ))}
          </InfoBlock>}
          {u.edu.content[lang] && <InfoBlock title={u.edu.title[lang]}>
            {u.edu.content[lang].map((edu, index) => (
              <EduBlock key={index} {...edu} />
            )) }
          </InfoBlock>}
          {u.languages.content[lang]?.length > 0 &&
            <InfoBlock title={u.languages.title[lang]}>
              <ListBlock list={u.languages.content[lang]}/>
            </InfoBlock>}
          {u.interests.title[lang]?.length > 0 && <InfoBlock title={u.interests.title[lang]}>
            <ListBlock list={u.interests.content[lang]} />
          </InfoBlock>}
        </div>
      </div>
    </div>
  );
};

export default App;
