import { testRunner } from '../../testRunner'
import { object, string, number } from '../../../src'

export const data = {
  name: 'john',
  age: 42,
  unknown: true,
}

export const test = {
  Struct: object({
    name: string(),
    age: number(),
  }),

  data: {
    name: 'john',
    age: 42,
    unknown: true,
  },

  failures: [
    {
      value: true,
      type: 'never',
      refinement: undefined,
      path: ['unknown'],
      branch: [data, data.unknown],
    },
  ],

  name: 'test/validation/object/invalid-property-unknown',
}

testRunner(test)
