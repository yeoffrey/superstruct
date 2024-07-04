import { testRunner } from '../../testRunner'
import { map, string, number } from '../../../src'

export const data = 'invalid'

export const test = {
  Struct: map(string(), number()),
  data: 'invalid',

  failures: [
    {
      value: 'invalid',
      type: 'map',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],

  name: 'test/validation/map/invalid',
}

testRunner(test)
