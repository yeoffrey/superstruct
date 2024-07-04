import { testRunner } from '../../testRunner'
import { pick, object, string, number } from '../../../src'

export const data = {
  name: 'john',
  age: 42,
}

export const test = {
  Struct: pick(
    object({
      name: string(),
      age: number(),
    }),
    ['name']
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

  name: 'test/validation/pick/invalid-property-unknown',
}

testRunner(test)
