import { Test } from '../../types'
import { number, array, size } from '../../../src'

export const validArrayTest: Test = {
  Struct: size(array(number()), 1, 5),
  data: [1, 2, 3],
  output: [1, 2, 3],
}
