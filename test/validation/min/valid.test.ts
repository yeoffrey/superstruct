import { testRunner } from '../../testRunner'
import { number, min } from '../../../src'

export const data = 3

export const test = {
  Struct: min(number(), 0),
  data: 3,
  output: 3,
  name: 'test/validation/min/valid',
}

testRunner(test)
