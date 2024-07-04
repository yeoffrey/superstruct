import { testRunner } from '../../testRunner'
import { set, number } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: set(number()),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'set',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/set/invalid',
}

testRunner(test)
