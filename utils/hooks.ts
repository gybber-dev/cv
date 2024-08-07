'use client'

import { useState } from 'react'

export const useCopyToClipboard = (timeout: number = 2000) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, timeout)
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }

  return [isCopied, copy]
}
