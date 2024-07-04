import { testRunner } from '../../testRunner'
import { regexp } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: regexp(),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'regexp',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/regexp/invalid',
}

testRunner(test)
