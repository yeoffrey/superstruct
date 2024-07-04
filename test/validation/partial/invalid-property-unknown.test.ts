import { testRunner } from '../../testRunner'
import { partial, string, number } from '../../../src'

export const data = {
  name: 'john',
  unknown: true,
}

export const test = {
  Struct: partial({
    name: string(),
    age: number(),
  }),

  data: {
    name: 'john',
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

  name: 'test/validation/partial/invalid-property-unknown',
}

testRunner(test)
