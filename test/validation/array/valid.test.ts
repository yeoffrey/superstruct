import { testRunner } from '../../testRunner'
import { array, number } from '../../../src'

export const data = [1, 2, 3]

export const test = {
  Struct: array(number()),
  data: [1, 2, 3],
  output: [1, 2, 3],
  name: 'test/validation/array/valid',
}

testRunner(test)
