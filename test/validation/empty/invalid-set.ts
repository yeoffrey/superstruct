import { Test } from '../../types'
import { set, empty, number } from '../../../src'

const data = new Set([1, 2, 3])

export const invalidSetTest: Test = {
  Struct: empty(set(number())),
  data,
  failures: [
    {
      value: data,
      type: 'set',
      refinement: 'empty',
      path: [],
      branch: [data],
    },
  ],
}
