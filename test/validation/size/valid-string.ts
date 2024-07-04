import { Test } from '../../types'
import { string, size } from '../../../src'

export const validStringTest: Test = {
  Struct: size(string(), 1, 5),
  data: 'two',
  output: 'two',
}
