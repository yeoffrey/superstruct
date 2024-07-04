import { Test } from '../../types'
import { array, empty, number } from '../../../src'

const data = [1, 2, 3]

export const invalidArrayTest: Test = {
  Struct: empty(array(number())),
  data,
  failures: [
    {
      value: data,
      type: 'array',
      refinement: 'empty',
      path: [],
      branch: [data],
    },
  ],
}
