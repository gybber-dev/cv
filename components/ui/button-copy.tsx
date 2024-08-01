import { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  copyText: string;
}

const CopyButton = ({ copyText, children, ...rest }: Props & ButtonHTMLAttributes<HTMLButtonElement> ) => {
  const copyToClipboard = () => {
    console.log('copyToClipboard', copyText) // TODO
  }

  return (
    <button {...rest} onClick={copyToClipboard}>
      {children}
    </button>
  )
}

export default CopyButton