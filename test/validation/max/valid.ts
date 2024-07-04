import { Test } from '../../types'
import { number, max } from '../../../src'

export const validTest: Test = {
  Struct: max(number(), 0),
  data: -1,
  output: -1,
}
