import { ButtonHTMLAttributes } from 'react'
import Notification from '@components/ui/notification'
import { useCopyToClipboard } from '@utils/hooks'
import { useTranslations } from 'next-intl'

type Props = {
  copyText: string
}

const CopyButton = ({
  copyText,
  children,
  ...rest
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const t = useTranslations('ui')
  const {isCopied, copy} = useCopyToClipboard()
  const copyHandler = async () => {
    await copy(copyText)
  }

  return (
    <>
      <button {...rest} onClick={copyHandler}>
        {children}
      </button>
      <Notification message={t('Copied')} show={isCopied} />
    </>
  )
}



export default CopyButton
