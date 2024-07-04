import { Test } from '../../types'
import { any } from '../../../src'

export const validUndefinedTest: Test = {
  Struct: any(),
  data: undefined,
  output: undefined,
}
