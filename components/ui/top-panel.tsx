'use client'

import Image from 'next/image'
import { useReactToPrint } from 'react-to-print'

const CV_FILE_NAME = 'faezov-cv.pdf'

type Props = {}

const TopPanel = ({ }: Props) => {

  const t = (phrase) => phrase
  const createPrintView = useReactToPrint({
    documentTitle: CV_FILE_NAME,
  })
  const printDocument = () => {
    createPrintView(null, () => document.body)
  }

  return (
    <aside className="sticky top-0 z-40 bg-primary print:hidden">
      <div className="mx-auto flex max-w-screen-lg items-center justify-end py-1 pr-8 gap-4">
        <button
          title={t('Print CV')}
          onClick={printDocument}
        >
          <Image
            width={20}
            height={20}
            src="/assets/icons/print.svg"
            alt="download"
            className=""
          />
        </button>
        {/*<button*/}
        {/*  className='w-5 h-5 underline underline-offset-4 border-white rounded-full shrink-0 flex place-items-center text-xs text-white font-semibold'*/}
        {/*  title={t('Change Language')}*/}
        {/*>*/}
        {/*  Ru*/}
        {/*</button>*/}
      </div>
    </aside>
  )
};

TopPanel.displayName = 'TopPanel'; // Setting the display name for the component

export default TopPanel