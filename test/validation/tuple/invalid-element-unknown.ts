import { testRunner } from '../../testRunner'
import { tuple, string, number } from '../../../src'

export const data = ['A', 3, 'unknown']

export const test = {
  Struct: tuple([string(), number()]),
  data: ['A', 3, 'unknown'],

  failures: [
    {
      value: 'unknown',
      type: 'never',
      refinement: undefined,
      path: [2],
      branch: [data, data[2]],
    },
  ],

  name: 'test/validation/tuple/invalid-element-unknown',
}

testRunner(test)
