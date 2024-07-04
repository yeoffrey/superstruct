import { testRunner } from '../../testRunner'
import { map, empty, number, string } from '../../../src'

export const data = new Map([[1, 'a']])

export const test = {
  Struct: empty(map(number(), string())),
  data: new Map([[1, 'a']]),

  failures: [
    {
      value: data,
      type: 'map',
      refinement: 'empty',
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/empty/invalid-map',
}

testRunner(test)
