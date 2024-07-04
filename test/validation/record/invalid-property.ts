import { Test } from '../../types'
import { record, string, number } from '../../../src'

export const invalidPropertyTest: Test = {
  Struct: record(string(), number()),
  data: {
    a: 'a',
    b: 'b',
  },
  failures: [
    ,
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
}
