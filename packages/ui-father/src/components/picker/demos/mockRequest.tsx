import { basicColumns } from './columns-data'
import { sleep } from 'ui-father/es/utils/sleep'

export async function mockRequest({ delay }: { delay: number }) {
  await sleep(delay)
  return basicColumns
}
