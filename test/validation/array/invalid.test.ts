import { testRunner } from '../../testRunner'
import { array, number } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: array(number()),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'array',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/array/invalid',
}

testRunner(test)
