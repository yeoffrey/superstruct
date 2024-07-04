import { Test } from '../../types'
import { number, optional } from '../../../src'

export const validUndefinedTest: Test = {
  Struct: optional(number()),
  data: undefined,
  output: undefined,
}
