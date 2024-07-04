import { testRunner } from '../../testRunner'
import { string, unknown, coerce } from '../../../src'

export const data = null

export const test = {
  Struct: coerce(string(), unknown(), (x) => (x == null ? 'unknown' : x)),

  data: null,
  output: 'unknown',
  create: true,
  name: 'test/validation/coerce/changed',
}

testRunner(test)
