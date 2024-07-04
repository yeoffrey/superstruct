import { Test } from '../../types'
import { number, min } from '../../../src'

export const validTest: Test = {
  Struct: min(number(), 0),
  data: 3,
  output: 3,
}
