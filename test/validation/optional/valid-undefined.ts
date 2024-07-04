import { testRunner } from '../../testRunner'
import { number, optional } from '../../../src'

export const data = undefined

export const test = {
  Struct: optional(number()),
  data: undefined,
  output: undefined,
  name: 'test/validation/optional/valid-undefined',
}

testRunner(test)
