import { testRunner } from '../../testRunner'
import { number, max } from '../../../src'

export const data = 0

export const test = {
  Struct: max(number(), 0),
  data: 0,
  output: 0,
  name: 'test/validation/max/valid-inclusive',
}

testRunner(test)
