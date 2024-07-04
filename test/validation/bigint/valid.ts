import { Test } from '../../types'
import { bigint } from '../../../src'

export const validTest: Test = {
  Struct: bigint(),
  data: 542n,
  output: 542n,
}
