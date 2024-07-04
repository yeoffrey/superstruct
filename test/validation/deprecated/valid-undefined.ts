import { Test } from '../../types'
import { deprecated, number } from '../../../src'

export const validUndefinedTest: Test = {
  Struct: deprecated(number(), () => {}),
  data: undefined,
  output: undefined,
}
