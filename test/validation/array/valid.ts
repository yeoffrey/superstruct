import { Test } from '../../types'
import { array, number } from '../../../src'

export const validTest: Test = {
  Struct: array(number()),
  data: [1, 2, 3],
  output: [1, 2, 3],
}
