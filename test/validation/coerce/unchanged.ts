import { testRunner } from '../../testRunner'
import { string, unknown, coerce } from '../../../src'

export const data = 'known'

export const test = {
  Struct: coerce(string(), unknown(), (x) => (x == null ? 'unknown' : x)),

  data: 'known',
  output: 'known',
  create: true,
  name: 'test/validation/coerce/unchanged',
}

testRunner(test)
