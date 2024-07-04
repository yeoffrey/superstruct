import { testRunner } from '../../testRunner'
import { integer } from '../../../src'

export const data = 3.14

export const test = {
  Struct: integer(),
  data: 3.14,

  failures: [
    {
      value: 3.14,
      type: 'integer',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/integer/invalid-decimal',
}

testRunner(test)
