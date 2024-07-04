import { testRunner } from '../../testRunner'
import { integer } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: integer(),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'integer',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/integer/invalid',
}

testRunner(test)
