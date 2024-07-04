import { testRunner } from '../../testRunner'
import { tuple, string, number } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: tuple([string(), number()]),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'tuple',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/tuple/invalid',
}

testRunner(test)
