import { Test } from '../../types'
import { number, nullable } from '../../../src'

export const validDefinedTest: Test = {
  Struct: nullable(number()),
  data: 42,
  output: 42,
}
