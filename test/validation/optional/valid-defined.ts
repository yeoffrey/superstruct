import { testRunner } from '../../testRunner'
import { number, optional } from '../../../src'

export const data = 42

export const test = {
  Struct: optional(number()),
  data: 42,
  output: 42,
  name: 'test/validation/optional/valid-defined',
}

testRunner(test)
