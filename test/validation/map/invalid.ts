import { Test } from '../../types'
import { map, string, number } from '../../../src'

const data = 'invalid'

export const invalidTest: Test = {
  Struct: map(string(), number()),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'map',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
