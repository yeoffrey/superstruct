import { Test } from '../../types'
import { number, nullable } from '../../../src'

const data = 'invalid'

export const invalidTest: Test = {
  Struct: nullable(number()),
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
