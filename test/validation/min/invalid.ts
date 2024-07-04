import { Test } from '../../types'
import { number, min } from '../../../src'

const data = -1

export const invalidTest: Test = {
  Struct: min(number(), 0),
  data,
  failures: [
    {
      value: -1,
      type: 'number',
      refinement: 'min',
      path: [],
      branch: [data],
    },
  ],
}
