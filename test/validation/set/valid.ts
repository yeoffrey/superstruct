import { testRunner } from '../../testRunner'
import { set, number } from '../../../src'

export const data = new Set([1, 2, 3])

export const test = {
  Struct: set(number()),
  data: new Set([1, 2, 3]),
  output: new Set([1, 2, 3]),
  name: 'test/validation/set/valid',
}

testRunner(test)
