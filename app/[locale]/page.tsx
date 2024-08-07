'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import CopyButton from '@components/ui/button-copy'
import TopPanel from '@components/ui/top-panel'
import Experience from '@components/experience'

type Contact = {
  name: string
  type: 'button' | 'link'
  title: string
  icon: string
  link?: string
}

const contacts: Contact[] = [
  {
    name: 'telegram',
    type: 'button',
    title: '@Gybber',
    link: 'https://t.me/Gybber',
    icon: '/assets/icons/telegram.svg',
  },
  {
    name: 'in',
    type: 'link',
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/azat-faezov-aa9400252',
    icon: '/assets/icons/linkedin-icon.svg',
  },
  {
    name: 'github',
    type: 'link',
    title: 'GitHub',
    link: 'https://github.com/gybber-dev',
    icon: '/assets/icons/github-icon.svg',
  },
]

export default function Home() {
  const t = useTranslations('User')

  return (
    <main className="relative bg-[#D6DBDC]/10 print:mx-6 print:my-8 print:bg-white">
      <TopPanel />
      <header className="bg-primary py-5 text-white">
        <div className="mx-auto grid w-full max-w-screen-lg grid-cols-[1fr] gap-x-12 px-4 sm:grid-cols-[2fr_1fr] md:px-8">
          <div className="flex items-center gap-8">
            <div className="hidden h-fit w-fit shrink-0 overflow-hidden rounded-full sm:flex sm:items-center sm:justify-center md:my-5">
              <Image
                className="flex h-[100px] w-[100px] md:h-[160px] md:w-[160px] "
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
                    {t('name')}
                  </h1>
                  <h2 className="text-md mb-3 font-normal text-white/60 md:text-lg">
                    {t('position')}
                  </h2>
                  <div className="hidden text-sm text-white md:block">{t('summary')}</div>
                </div>
              </div>
            </div>
          </div>
          <address className="shrink-0 text-sm sm:ml-auto sm:mt-6 md:text-base">
            <div className="space-y-2">
              <p className="flex items-center text-white">
                <Image
                  width={20}
                  height={20}
                  src={'/assets/icons/email.svg'}
                  alt="mail"
                  className="mr-2"
                />
                <CopyButton copyText={t('mail')} className="hover:underline">
                  {t('mail')}
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
                <a className="hover:underline" href={`tel:${t('phone')}`}>
                  {t('phone')}
                </a>
              </p>
            </div>
            <div className="my-2 flex gap-2">
              {contacts.map((contact) =>
                contact.type === 'button' ? (
                  <CopyButton
                    key={contact.name}
                    className="mb-1 flex items-center text-white"
                    title={contact.title}
                    copyText={contact.title}
                  >
                    <Image src={contact.icon} alt={contact.name} width={24} height={24} />
                  </CopyButton>
                ) : (
                  <a
                    key={contact.name}
                    target="_blank"
                    className="mb-1 flex items-center text-white"
                    href={contact.link}
                  >
                    <Image
                      width={24}
                      height={24}
                      src={contact.icon}
                      alt={contact.name}
                      className="h-6 w-6"
                    />
                  </a>
                ),
              )}
            </div>
          </address>
        </div>
      </header>
      <Experience />
    </main>
  )
}
