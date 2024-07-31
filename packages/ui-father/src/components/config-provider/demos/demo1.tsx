import React from 'react'
import { ConfigProvider, ErrorBlock } from 'ui-father'
import { DemoBlock } from 'demos'
import zhCN from 'ui-father/es/locales/zh-CN'
import zhTW from 'ui-father/es/locales/zh-TW'
import zhHK from 'ui-father/es/locales/zh-HK'
import enUS from 'ui-father/es/locales/en-US'
import faIR from 'ui-father/es/locales/fa-IR'

export default () => {
  return (
    <>
      <DemoBlock title='中文'>
        <ConfigProvider locale={zhCN}>
          <ErrorBlock status='disconnected' />
        </ConfigProvider>
      </DemoBlock>

      <DemoBlock title='英文'>
        <ConfigProvider locale={enUS}>
          <ErrorBlock status='disconnected' />
        </ConfigProvider>
      </DemoBlock>

      <DemoBlock title='中文(台湾繁体)'>
        <ConfigProvider locale={zhTW}>
          <ErrorBlock status='disconnected' />
        </ConfigProvider>
      </DemoBlock>

      <DemoBlock title='中文(香港繁体)'>
        <ConfigProvider locale={zhHK}>
          <ErrorBlock status='disconnected' />
        </ConfigProvider>
      </DemoBlock>

      <DemoBlock title='波斯语'>
        <ConfigProvider locale={faIR}>
          <ErrorBlock />
        </ConfigProvider>
      </DemoBlock>
    </>
  )
}
