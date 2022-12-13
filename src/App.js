import './App.scss';
import React from 'react';
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

const App = () => {
  return (
    <div className='h-screen'>
      <header className='bg-back h-[160px] min-w-max'>
        <div className='flex m-auto w-full lg:w-[1024px]'>
          <img className='h-[160px]' src={avatar} alt="me"/>
          <div className='flex text-white justify-between px-4 py-2 infoWrapper'>
            <div className='mr-4'>
              <div className='text-2xl uppercase font-semibold tracking-wider'>{u.name}</div>
              <div className='text-lg mb-2'>{u.position}</div>
              <div className='contact'>
                <img src={mailIcon} alt='mail' />
                {u.mail}
              </div>
              <div className='contact'>
                <img src={phoneIcon} alt='phone' />
                {u.phone}
              </div>
              {u.contacts.telegram && <a className='contact' href={u.contacts.telegram.link}>
                <TelegramIcon />
                {u.contacts.telegram.title}
              </a>}
            </div>
            <div className='pt-8'>
              {u.contacts.in && <a className='contact' href={u.contacts.in.link}>
                <img src={inIcon} alt='icon' />
                {u.contacts.in.title}
              </a>}
              {u.contacts.github && <a className='contact' href={u.contacts.github.link}>
                <GithubIcon />
                {u.contacts.github.title}
              </a>}
              {u.contacts.codeopen && <div className='contact'>
                <img src={codeopenIcon} alt='codeopen' />
                {u.contacts.codeopen}
              </div>}
              {u.contacts.web && <div className='contact'>
                <img src={webIcon} alt='web' />
                {u.contacts.web}
              </div>}
            </div>
          </div>
        </div>
      </header>
      <div className='p-4 grid info-markup col-span-2 m-auto w-full lg:w-[1024px]'>
        <div className='col-start-1 col-end-[-1]'>
          <InfoBlock title={u.summary.title[u.lang]}>
            {u.summary.content[u.lang]}
          </InfoBlock>
        </div>
        <InfoBlock title={u.experience.title[u.lang]}>
          {u.experience.content[u.lang].map((job, index) => (
            <JobBlock
              key={index}
              lang={u.lang}
              {...job}
            />))
          }
        </InfoBlock>
        <div className='pl-4'>
          {u.skills.content[u.lang] && <InfoBlock title={u.skills.title[u.lang]}>
            {u.skills.content[u.lang].map(skill => (
              <SkillBlock key={skill.title} {...skill} />
            ))}
          </InfoBlock>}
          {u.edu.content[u.lang] && <InfoBlock title={u.edu.title[u.lang]}>
            {u.edu.content[u.lang].map((edu, index) => (
              <EduBlock key={index} {...edu} />
            )) }
          </InfoBlock>}
          {u.languages.content[u.lang]?.length > 0 &&
            <InfoBlock title={u.languages.title[u.lang]}>
              <ListBlock list={u.languages.content[u.lang]}/>
            </InfoBlock>}
          {u.interests.title[u.lang]?.length > 0 && <InfoBlock title={u.interests.title[u.lang]}>
            <ListBlock list={u.interests.content[u.lang]} />
          </InfoBlock>}
        </div>
      </div>
    </div>
  );
};

export default App;
