import { testRunner } from '../../testRunner'
import { type, string, number } from '../../../src'

export const data = {
  id: 1,
}

export const test = {
  Struct: type({
    id: number(),
    person: type({
      name: string(),
      age: number(),
    }),
  }),

  data: {
    id: 1,
  },

  failures: [
    {
      value: undefined,
      type: 'type',
      refinement: undefined,
      path: ['person'],
      branch: [data, undefined],
    },
  ],

  name: 'test/validation/type/invalid-property-nested',
}

testRunner(test)
