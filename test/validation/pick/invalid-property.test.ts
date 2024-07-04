import { testRunner } from '../../testRunner'
import { pick, object, string, number } from '../../../src'

export const data = {
  age: 'invalid',
}

export const test = {
  Struct: pick(
    object({
      name: string(),
      age: number(),
    }),
    ['age']
  ),

  data: {
    age: 'invalid',
  },

  failures: [
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: ['age'],
      branch: [data, data.age],
    },
  ],

  name: 'test/validation/pick/invalid-property',
}

testRunner(test)
