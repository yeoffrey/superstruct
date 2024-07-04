import { Test } from '../../types'
import { string, size } from '../../../src'

export const validExactTest: Test = {
  Struct: size(string(), 4),
  data: 'abcd',
  output: 'abcd',
}
