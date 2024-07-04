import { testRunner } from '../../testRunner'
import { record, string, number } from '../../../src'

export const data = {
  a: 'a',
  b: 'b',
}

export const test = {
  Struct: record(string(), number()),

  data: {
    a: 'a',
    b: 'b',
  },

  failures: [
    {
      value: 'a',
      type: 'number',
      refinement: undefined,
      path: ['a'],
      branch: [data, data.a],
    },
    {
      value: 'b',
      type: 'number',
      refinement: undefined,
      path: ['b'],
      branch: [data, data.b],
    },
  ],

  name: 'test/validation/record/invalid-property',
}

testRunner(test)
