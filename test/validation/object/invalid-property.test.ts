import { testRunner } from '../../testRunner'
import { object, string, number } from '../../../src'

export const data = {
  name: 'john',
  age: 'invalid',
  height: 2,
}

export const test = {
  Struct: object({
    name: string(),
    age: number(),
    height: string(),
  }),

  data: {
    name: 'john',
    age: 'invalid',
    height: 2,
  },

  failures: [
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: ['age'],
      branch: [data, data.age],
    },
    {
      value: 2,
      type: 'string',
      refinement: undefined,
      path: ['height'],
      branch: [data, data.height],
    },
  ],

  name: 'test/validation/object/invalid-property',
}

testRunner(test)
