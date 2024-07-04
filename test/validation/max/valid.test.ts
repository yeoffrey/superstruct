import { testRunner } from '../../testRunner'
import { number, max } from '../../../src'

export const data = -1

export const test = {
  Struct: max(number(), 0),
  data: -1,
  output: -1,
  name: 'test/validation/max/valid',
}

testRunner(test)
