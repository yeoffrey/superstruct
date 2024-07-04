import { Test } from '../../types'
import { array, number } from '../../../src'

const data = 'invalid'

export const invalidTest: Test = {
  Struct: array(number()),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'array',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
