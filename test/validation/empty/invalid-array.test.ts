import { testRunner } from '../../testRunner'
import { array, empty, number } from '../../../src'

export const data = [1, 2, 3]

export const test = {
  Struct: empty(array(number())),
  data: [1, 2, 3],

  failures: [
    {
      value: data,
      type: 'array',
      refinement: 'empty',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/empty/invalid-array',
}

testRunner(test)
