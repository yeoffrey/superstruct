import { testRunner } from '../../testRunner'
import { set } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: set(),
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

  name: 'test/validation/set/invalid-opaque',
}

testRunner(test)
