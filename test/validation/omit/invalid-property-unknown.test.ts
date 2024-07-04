import { testRunner } from '../../testRunner'
import { omit, object, string, number } from '../../../src'

export const data = {
  name: 'john',
  age: 42,
}

export const test = {
  Struct: omit(
    object({
      name: string(),
      age: number(),
    }),
    ['age']
  ),

  data: {
    name: 'john',
    age: 42,
  },

  failures: [
    {
      value: 42,
      type: 'never',
      refinement: undefined,
      path: ['age'],
      branch: [data, data.age],
    },
  ],

  name: 'test/validation/omit/invalid-property-unknown',
}

testRunner(test)
