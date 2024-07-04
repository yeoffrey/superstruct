import { testRunner } from '../../testRunner'
import { map, string, number } from '../../../src'

export const data = new Map([
  ['a', 'a'],
  ['b', 'b'],
])

export const test = {
  Struct: map(string(), number()),

  data: new Map([
    ['a', 'a'],
    ['b', 'b'],
  ]),

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

  name: 'test/validation/map/invalid-property',
}

testRunner(test)
