import React, { useEffect } from 'react'
import { ErrorBlock } from 'ui-father'

export default () => {
  useEffect(() => {
    document.body.style.background = 'var(--adm-color-background)'
  }, [])
  return <ErrorBlock fullPage />
}
