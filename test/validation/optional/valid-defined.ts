import { Test } from '../../types'
import { number, optional } from '../../../src'

export const validDefinedTest: Test = {
  Struct: optional(number()),
  data: 42,
  output: 42,
}
