import { testRunner } from '../../testRunner'
import { pick, object, string, number } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: pick(
    object({
      name: string(),
      age: number(),
    }),
    ['name']
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

  name: 'test/validation/pick/invalid',
}

testRunner(test)
