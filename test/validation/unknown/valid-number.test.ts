import { testRunner } from '../../testRunner'
import { unknown } from '../../../src'

export const data = 1

export const test = {
  Struct: unknown(),
  data: 1,
  output: 1,
  name: 'test/validation/unknown/valid-number',
}

testRunner(test)
