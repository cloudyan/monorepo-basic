import React from 'react'
import { PullToRefresh, Toast } from 'ui-father'
import { DemoDescription } from 'demos'
import { sleep } from 'ui-father/es/utils/sleep'

import styles from './demo3.less'

async function doRefresh() {
  await sleep(1000)
  Toast.show({
    icon: 'fail',
    content: '刷新失败',
  })
  throw new Error('刷新失败')
}

export default () => {
  return (
    <PullToRefresh onRefresh={doRefresh}>
      <div className={styles.content}>
        <DemoDescription>下拉刷新一下试试</DemoDescription>
      </div>
    </PullToRefresh>
  )
}
