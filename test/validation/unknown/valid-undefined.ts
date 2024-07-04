import { testRunner } from '../../testRunner'
import { unknown } from '../../../src'

export const data = undefined

export const test = {
  Struct: unknown(),
  data: undefined,
  output: undefined,
  name: 'test/validation/unknown/valid-undefined',
}

testRunner(test)
