import { testRunner } from '../../testRunner'
import { set, empty, number } from '../../../src'

export const data = new Set([1, 2, 3])

export const test = {
  Struct: empty(set(number())),
  data: new Set([1, 2, 3]),

  failures: [
    {
      value: data,
      type: 'set',
      refinement: 'empty',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/empty/invalid-set',
}

testRunner(test)
