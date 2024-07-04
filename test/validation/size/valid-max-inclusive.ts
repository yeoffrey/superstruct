import { Test } from '../../types'
import { string, size } from '../../../src'

export const validMaxInclusiveTest: Test = {
  Struct: size(string(), 1, 5),
  data: 'abcde',
  output: 'abcde',
}
