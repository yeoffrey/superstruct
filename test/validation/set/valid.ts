import { Test } from '../../types'
import { set, number } from '../../../src'

export const validTest: Test = {
  Struct: set(number()),
  data: new Set([1, 2, 3]),
  output: new Set([1, 2, 3]),
}
