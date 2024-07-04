import { Test } from '../../types'
import { tuple, string, number } from '../../../src'

const data = ['A', 3, 'unknown']

export const invalidElementUnknownTest: Test = {
  Struct: tuple([string(), number()]),
  data,
  failures: [
    {
      value: 'unknown',
      type: 'never',
      refinement: undefined,
      path: [2],
      branch: [data, data[2]],
    },
  ],
}
