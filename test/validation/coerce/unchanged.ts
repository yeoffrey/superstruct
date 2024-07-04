import { Test } from '../../types'
import { string, unknown, coerce } from '../../../src'

export const unchangedTest: Test = {
  Struct: coerce(string(), unknown(), (x) => (x == null ? 'unknown' : x)),
  data: 'known',
  output: 'known',
  create: true,
}
