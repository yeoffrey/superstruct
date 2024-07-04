import { testRunner } from '../../testRunner'
import { type, string, number } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: type({
    name: string(),
    age: number(),
  }),

  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'type',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/type/invalid',
}

testRunner(test)
