import { testRunner } from '../../testRunner'
import { unknown } from '../../../src'

export const data = 'valid'

export const test = {
  Struct: unknown(),
  data: 'valid',
  output: 'valid',
  name: 'test/validation/unknown/valid-string',
}

testRunner(test)
