import { testRunner } from '../../testRunner'
import { tuple, string, number } from '../../../src'

export const data = [false, 3]

export const test = {
  Struct: tuple([string(), number()]),
  data: [false, 3],

  failures: [
    {
      value: false,
      type: 'string',
      refinement: undefined,
      path: [0],
      branch: [data, data[0]],
    },
  ],

  name: 'test/validation/tuple/invalid-element',
}

testRunner(test)
