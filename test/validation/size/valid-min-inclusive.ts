import { Test } from '../../types'
import { string, size } from '../../../src'

export const validMinInclusiveTest: Test = {
  Struct: size(string(), 1, 5),
  data: 'a',
  output: 'a',
}
