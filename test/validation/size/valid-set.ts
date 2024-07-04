import { Test } from '../../types'
import { number, set, size } from '../../../src'

export const validSetTest: Test = {
  Struct: size(set(number()), 1, 5),
  data: new Set([1, 2, 3]),
  output: data,
}
