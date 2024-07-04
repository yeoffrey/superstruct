import { testRunner } from '../../testRunner'
import { number, optional } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: optional(number()),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/optional/invalid',
}

testRunner(test)
