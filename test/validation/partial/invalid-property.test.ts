import { testRunner } from '../../testRunner'
import { partial, string, number } from '../../../src'

export const data = {
  age: 'invalid',
}

export const test = {
  Struct: partial({
    name: string(),
    age: number(),
  }),

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

  name: 'test/validation/partial/invalid-property',
}

testRunner(test)
