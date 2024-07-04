import { Test } from '../../types'
import { tuple, string, number } from '../../../src'

const data = 'invalid'

export const invalidTest: Test = {
  Struct: tuple([string(), number()]),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'tuple',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
