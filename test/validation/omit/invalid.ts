import { testRunner } from '../../testRunner'
import { omit, object, string, number } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: omit(
    object({
      name: string(),
      age: number(),
    }),
    ['age']
  ),

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

  name: 'test/validation/omit/invalid',
}

testRunner(test)
