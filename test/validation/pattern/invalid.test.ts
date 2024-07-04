import { testRunner } from '../../testRunner'
import { string, pattern } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: pattern(string(), /\d+/),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'string',
      refinement: 'pattern',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/pattern/invalid',
}

testRunner(test)
