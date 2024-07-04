import { testRunner } from '../../testRunner'
import { type, string, number } from '../../../src'

export const data = {
  name: 'john',
  age: 'invalid',
}

export const test = {
  Struct: type({
    name: string(),
    age: number(),
  }),

  data: {
    name: 'john',
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

  name: 'test/validation/type/invalid-property',
}

testRunner(test)
