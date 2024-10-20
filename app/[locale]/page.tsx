'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import CopyButton from '@components/ui/button-copy'
import TopPanel from '@components/ui/top-panel'
import Experience from '@components/experience'
import { ReactElement } from 'react'

type Contact = {
  name: string
  type: 'button' | 'link'
  title: string
  icon: ReactElement
  link?: string
}

const contacts: Contact[] = [
  {
    name: 'telegram',
    type: 'button',
    title: '@Gybber',
    link: 'https://t.me/Gybber',
    icon: <TelegramIcon />,
  },
  {
    name: 'in',
    type: 'link',
    title: 'linkedin.com/in/azat-faezov',
    link: 'https://linkedin.com/in/azat-faezov',
    icon: <LinkedInIcon />,
  },
  {
    name: 'github',
    type: 'link',
    title: 'gybber-dev',
    link: 'https://github.com/gybber-dev',
    icon: <GitHubIcon />,
  },
]

export default function Home() {
  const t = useTranslations('User')

  return (
    <main className="relative bg-[#D6DBDC]/10 print:mx-6 print:my-8 print:bg-white">
      <TopPanel />
      <header className="bg-primary print:bg-white py-5 print:py-0 text-white print:text-primary">
        <div className="mx-auto grid w-full max-w-screen-lg grid-cols-[1fr] gap-x-12 px-4 sm:grid-cols-[2fr_1fr] md:px-8">
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:gap-8 lg:gap-16">
                <div className="">
                  <h1 className="text-xl font-semibold uppercase tracking-wider md:text-2xl">
                    {t('name')}
                  </h1>
                  <h2 className="text-md mb-3 font-normal text-white/60 print:text-primary/80 md:text-lg">
                    {t('position')}
                  </h2>
                  <div className="hidden text-sm sm:block">{t('summary')}</div>
                </div>
              </div>
            </div>
          </div>
          <address className="shrink-0 text-sm sm:ml-auto md:text-base">
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_iconCarrier">
                    <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path>
                  </g>
                </svg>
                <CopyButton copyText={t('mail')} className="hover:underline">
                  {t('mail')}
                </CopyButton>
              </p>

              <p className="flex items-center gap-1">
                <svg width={20} height={20} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor">
                  <path
                    fill="currentColor"
                    id="phone"
                    d="M6.85728,2.44489 C7.99928,3.27790429 8.88915755,4.41552061 9.65001761,5.50316536 L10.0920364,6.14691904 L10.0920364,6.14691904 L10.509,6.76166 L10.509,6.76166 C10.9374,7.38835 10.8351,8.244 10.2531,8.74772 L8.30198,10.1967 C8.10859,10.3404 8.04429,10.6014 8.16028,10.8125 C8.60173,11.6161 9.38819,12.8119 10.2882,13.7119 C11.1891,14.6128 12.4414,15.45 13.3002,15.9412 C13.5229,16.0685 13.803,15.9948 13.9438,15.7803 L15.2131,13.8468 C15.6999,13.1991 16.6088,13.0576 17.2695,13.5149 L17.9332982,13.9735916 C19.1717645,14.8335207 20.5037538,15.8105615 21.521,17.1133 C21.8626,17.5507 21.9133,18.1227 21.7096,18.5981 C20.8728,20.5507 18.7552,22.2136 16.5524,22.1325 L16.2518759,22.1158001 L16.2518759,22.1158001 L16.0189256,22.0957065 L16.0189256,22.0957065 L15.7611336,22.0668244 L15.7611336,22.0668244 L15.4795621,22.0277651 L15.4795621,22.0277651 L15.1752731,21.97714 C15.1227241,21.9676615 15.0692729,21.9576432 15.0149414,21.9470562 L14.6785676,21.8764784 C14.6208039,21.8635009 14.5622043,21.8498968 14.5027909,21.8356372 L14.136722,21.7419821 L14.136722,21.7419821 L13.7521839,21.6312063 L13.7521839,21.6312063 L13.3502388,21.501921 C11.5039131,20.8764078 9.16110938,19.6464875 6.75735,17.2427 C4.35356813,14.8389125 3.12365344,12.4961028 2.49813876,10.6497861 L2.36885301,10.2478433 L2.36885301,10.2478433 L2.25807648,9.86330795 L2.25807648,9.86330795 L2.16442042,9.4972422 L2.16442042,9.4972422 L2.08649611,9.15070812 C2.06298899,9.03857004 2.04187237,8.92986425 2.02291481,8.82476776 L1.97228778,8.52048321 L1.97228778,8.52048321 L1.93322631,8.23891652 L1.93322631,8.23891652 L1.90434165,7.98112978 L1.90434165,7.98112978 L1.88424507,7.74818505 L1.88424507,7.74818505 L1.86754,7.44767 L1.86754,7.44767 C1.78675,5.25221 3.46855,3.11902 5.41215,2.28605 C5.86822,2.09059 6.4206,2.12636 6.85728,2.44489 Z M14.9917005,6.03952315 L15.1077,6.05315 C15.8356,6.18149 16.5042,6.53699 17.0177,7.06867 C17.5311,7.60035 17.863,8.28093 17.9659,9.01287 C18.0428,9.55978 17.6617,10.0654 17.1148,10.1423 C16.6069643,10.2137071 16.1346531,9.89022337 16.0082806,9.40576032 L15.9854,9.29121 C15.9413,8.97753 15.799,8.68585 15.579,8.45799 C15.3955833,8.26809833 15.1660556,8.13065111 14.9140856,8.05827565 L14.7604,8.02276 C14.2166,7.92686 13.8534,7.4082 13.9493,6.86431 C14.03835,6.35926 14.4919571,6.01004352 14.9917005,6.03952315 L14.9917005,6.03952315 Z M15,2.99999 C15.7879,2.99999 16.5682,3.15518 17.2961,3.45671 C18.0241,3.75824 18.6855,4.2002 19.2427,4.75735 C19.7998,5.3145 20.2418,5.97594 20.5433,6.70389 C20.8448,7.43184 21,8.21206 21,8.99999 C21,9.55227 20.5523,9.99999 20,9.99999 C19.48715,9.99999 19.0644908,9.61394571 19.0067275,9.11661025 L19,8.99999 C19,8.4747 18.8966,7.95456 18.6955,7.46926 C18.4945,6.98395 18.1999,6.543 17.8284,6.17156 C17.457,5.80013 17.0161,5.50549 16.5307,5.30447 C16.1262833,5.13695333 15.6977,5.03718667 15.2620796,5.00858435 L15,4.99999 C14.4477,4.99999 14,4.55227 14,3.99999 C14,3.44771 14.4477,2.99999 15,2.99999 Z"
                  >
                  </path>
                </svg>
                <a className="hover:underline" href={`tel:${t('phone')}`}>
                  {t('phone')}
                </a>
              </p>
            </div>
            <div className="my-2 flex flex-col gap-2">
              {contacts.map((contact) =>
                contact.type === 'button' ? (
                  <CopyButton
                    key={contact.name}
                    className="mb-1 flex gap-2 items-center"
                    title={contact.title}
                    copyText={contact.title}
                  >
                    <span className='shrink-0'>{contact.icon}</span>
                    <span>{contact.title}</span>
                  </CopyButton>
                ) : (
                  <a
                    key={contact.name}
                    target="_blank"
                    className="mb-1 flex gap-2 items-center"
                    href={contact.link}
                  >
                    <span className='shrink-0'>{contact.icon}</span>
                    <span title={contact.title} className='truncate'>{contact.title}</span>
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

function TelegramIcon() {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20" height="20">
      <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true">
      <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20" width="20">
      <path d="m17.0391667 17.0433333h-2.9616667v-4.6408333c0-1.1066667-.0225-2.53083333-1.5433333-2.53083333-1.5441667 0-1.78 1.20416663-1.78 2.44916663v4.7225h-2.9616667v-9.5433333h2.845v1.30083333h.0383333c.3975-.75 1.3641667-1.54166666 2.8083334-1.54166666 3.0008333 0 3.5558333 1.975 3.5558333 4.54583333v5.2383333zm-12.5916667-10.84916663c-.95333333 0-1.71916667-.77166667-1.71916667-1.72083334 0-.94833333.76666667-1.71916666 1.71916667-1.71916666.95 0 1.72.77083333 1.72 1.71916666 0 .94916667-.77083333 1.72083334-1.72 1.72083334zm1.485 10.84916663h-2.97v-9.5433333h2.97zm12.5883333-17.0433333h-17.04499997c-.81583333 0-1.47583333.645-1.47583333 1.44083333v17.11833337c0 .7966666.66 1.4408333 1.47583333 1.4408333h17.04249997c.815 0 1.4816667-.6441667 1.4816667-1.4408333v-17.11833337c0-.79583333-.6666667-1.44083333-1.4816667-1.44083333z" fill="currentColor" />
    </svg>
  )
}