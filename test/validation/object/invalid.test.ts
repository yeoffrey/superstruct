import { testRunner } from '../../testRunner'
import { object, string, number } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: object({
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

  name: 'test/validation/object/invalid',
}

testRunner(test)
