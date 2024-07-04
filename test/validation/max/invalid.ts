import { Test } from '../../types'
import { number, max } from '../../../src'

const data = 1

export const invalidTest: Test = {
  Struct: max(number(), 0),
  data,
  failures: [
    {
      value: 1,
      type: 'number',
      refinement: 'max',
      path: [],
      branch: [data],
    },
  ],
}
