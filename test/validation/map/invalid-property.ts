import { Test } from '../../types'
import { map, string, number } from '../../../src'

const data = new Map([
  ['a', 'a'],
  ['b', 'b'],
])

export const invalidPropertyTest: Test = {
  Struct: map(string(), number()),
  data,
  failures: [
    {
      value: 'a',
      type: 'number',
      refinement: undefined,
      path: ['a'],
      branch: [data, 'a'],
    },
    {
      value: 'b',
      type: 'number',
      refinement: undefined,
      path: ['b'],
      branch: [data, 'b'],
    },
  ],
}
