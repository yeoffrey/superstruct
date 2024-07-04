import { testRunner } from '../../testRunner'
import { tuple, string, number } from '../../../src'

export const data = ['A']

export const test = {
  Struct: tuple([string(), number()]),
  data: ['A'],

  failures: [
    {
      value: undefined,
      type: 'number',
      refinement: undefined,
      path: [1],
      branch: [data, data[1]],
    },
  ],

  name: 'test/validation/tuple/invalid-element-missing',
}

testRunner(test)
