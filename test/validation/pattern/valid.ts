import { Test } from '../../types'
import { string, pattern } from '../../../src'

export const validTest: Test = {
  Struct: pattern(string(), /\d+/),
  data: '123',
  output: '123',
}
