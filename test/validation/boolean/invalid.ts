import { testRunner } from '../../testRunner'
import { boolean } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: boolean(),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'boolean',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/boolean/invalid',
}

testRunner(test)
