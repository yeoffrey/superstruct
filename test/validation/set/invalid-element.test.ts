import { testRunner } from '../../testRunner'
import { set, number } from '../../../src'

export const data = new Set([1, 'b', 3])

export const test = {
  Struct: set(number()),
  data: new Set([1, 'b', 3]),

  failures: [
    {
      value: 'b',
      type: 'number',
      refinement: undefined,
      path: ['b'],
      branch: [data, 'b'],
    },
  ],

  name: 'test/validation/set/invalid-element',
}

testRunner(test)
