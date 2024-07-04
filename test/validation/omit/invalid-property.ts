import { testRunner } from '../../testRunner'
import { omit, object, string, number } from '../../../src'

export const data = {
  age: 'invalid',
}

export const test = {
  Struct: omit(
    object({
      name: string(),
      age: number(),
    }),
    ['name']
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

  name: 'test/validation/omit/invalid-property',
}

testRunner(test)
