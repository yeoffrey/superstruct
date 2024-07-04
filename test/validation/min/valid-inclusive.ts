import { testRunner } from '../../testRunner'
import { number, min } from '../../../src'

export const data = 0

export const test = {
  Struct: min(number(), 0),
  data: 0,
  output: 0,
  name: 'test/validation/min/valid-inclusive',
}

testRunner(test)
