import { createPortal } from 'react-dom'
import classNames from 'classnames'

type Props = {
  message: string
  show: boolean
}

const Notification = ({ message, show }: Props) => {
  return createPortal(
    <div
      className={classNames(
        'fixed z-50 rounded-lg border bg-amber-100 px-4 py-2 shadow-lg transition-all duration-300 top-2 text-sm text-primary font-semibold',
        show ? 'right-4' : '-right-full',
      )}
    >
      {message}
    </div>,
    document.body,
  )
}

export default Notification