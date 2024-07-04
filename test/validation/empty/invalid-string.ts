import { testRunner } from '../../testRunner'
import { string, empty } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: empty(string()),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'string',
      refinement: 'empty',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/empty/invalid-string',
}

testRunner(test)
