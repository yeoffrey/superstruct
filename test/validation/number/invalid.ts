import { Test } from '../../types'
import { number } from '../../../src'

const data = 'invalid'

export const invalidTest: Test = {
  Struct: number(),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
