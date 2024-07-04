import { testRunner } from '../../testRunner'
import { partial, string, number } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: partial({
    name: string(),
    age: number(),
  }),

  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'object',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/partial/invalid',
}

testRunner(test)
