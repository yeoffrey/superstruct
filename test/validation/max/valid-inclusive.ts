import { Test } from '../../types'
import { number, max } from '../../../src'

export const validInclusiveTest: Test = {
  Struct: max(number(), 0),
  data: 0,
  output: 0,
}
