import { Test } from '../../types'
import { array, number } from '../../../src'

const data = [1, 'invalid', 3]

export const invalidElementTest: Test = {
  Struct: array(number()),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: [1],
      branch: [data, data[1]],
    },
  ],
}
