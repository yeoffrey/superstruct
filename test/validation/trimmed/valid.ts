import { Test } from '../../types'
import { string, trimmed } from '../../../src'

export const validTest: Test = {
  Struct: trimmed(string()),
  data: '  valid  ',
  output: 'valid',
  create: true,
}
