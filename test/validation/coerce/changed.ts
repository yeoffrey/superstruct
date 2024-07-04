import { Test } from '../../types'
import { string, unknown, coerce } from '../../../src'

export const changedTest: Test = {
  Struct: coerce(string(), unknown(), (x) => (x == null ? 'unknown' : x)),
  data: null,
  output: 'unknown',
  create: true,
}
