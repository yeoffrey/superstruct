import { Test } from '../../types'
import { number, size } from '../../../src'

export const validNumberTest: Test = {
  Struct: size(number(), 1, 5),
  data: 3,
  output: 3,
}
