import { testRunner } from '../../testRunner'
import { integer } from '../../../src'

export const data = 42

export const test = {
  Struct: integer(),
  data: 42,
  output: 42,
  name: 'test/validation/integer/valid',
}

testRunner(test)
