import { Test } from '../../types'
import { number, min } from '../../../src'

export const validInclusiveTest: Test = {
  Struct: min(number(), 0),
  data: 0,
  output: 0,
}
