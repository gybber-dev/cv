'use client'

import Image from 'next/image'
import { Link } from '@/navigation'
import { useParams } from 'next/navigation'
import { defaultLocale } from '@/config'
import { useTranslations } from 'next-intl'

const TopPanel = () => {
  const { locale } = useParams()
  const t = useTranslations('ui')

  const printDocument = () => {
    window?.print()
  }

  return (
    <aside className="sticky top-0 z-40 bg-primary print:hidden border-b">
      <div className="mx-auto flex max-w-screen-lg items-center justify-end gap-4 py-1 pr-4 md:pr-8">
        <button title={t('Print CV')} onClick={printDocument}>
          <Image width={20} height={20} src="/assets/icons/print.svg" alt={t('Print CV')} className="" />
        </button>
        {locale === defaultLocale ? (
          <Link
            title={t('Change Language')}
            className="flex h-5 w-5 shrink-0 place-items-center rounded-full border-white text-xs font-semibold text-white underline underline-offset-4"
            href="/"
            locale="ru"
          >
            EN
          </Link>
        ) : (
          <Link
            title={t('Change Language')}
            className="flex h-5 w-5 shrink-0 place-items-center rounded-full border-white text-xs font-semibold text-white underline underline-offset-4"
            href="/"
            locale="en"
          >
            RU
          </Link>
        )}
      </div>
    </aside>
  )
}

TopPanel.displayName = 'TopPanel' // Setting the display name for the component

export default TopPanel
