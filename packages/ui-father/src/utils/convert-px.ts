import { canUseDom } from './can-use-dom'
import { isDev } from './is-dev'
import { devError } from './dev-log'

let tenPxTester: HTMLDivElement | null = null
let tester: HTMLDivElement | null = null

if (canUseDom) {
  tenPxTester = document.createElement('div')
  tenPxTester.className = 'adm-px-tester'
  tenPxTester.style.setProperty('--size', '10')
  document.body.appendChild(tenPxTester)
  tester = document.createElement('div')
  tester.className = 'adm-px-tester'
  document.body.appendChild(tester)
  if (isDev) {
    if (window.getComputedStyle(tester).position !== 'fixed') {
      devError(
        'Global',
        'The px tester is not rendering properly. Please make sure you have imported `ui-father/es/global`.'
      )
    }
  }
}

export function convertPx(px: number) {
  if (tenPxTester === null || tester === null) return px
  if (tenPxTester.getBoundingClientRect().height === 10) {
    return px
  }
  tester.style.setProperty('--size', px.toString())
  return tester.getBoundingClientRect().height
}
