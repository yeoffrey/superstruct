import { testRunner } from '../../testRunner'
import { literal } from '../../../src'

export const data = 42

export const test = {
  Struct: literal(42),
  data: 42,
  output: 42,
  name: 'test/validation/literal/valid',
}

testRunner(test)
