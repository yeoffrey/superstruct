import { testRunner } from '../../testRunner'
import { array, number } from '../../../src'

export const data = [1, 'invalid', 3]

export const test = {
  Struct: array(number()),
  data: [1, 'invalid', 3],

  failures: [
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: [1],
      branch: [data, data[1]],
    },
  ],

  name: 'test/validation/array/invalid-element',
}

testRunner(test)
