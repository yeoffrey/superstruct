import { Test } from '../../types'
import { array, size, number } from '../../../src'

const data: any = []

export const invalidArrayTest: Test = {
  Struct: size(array(number()), 1, 5),
  data,
  failures: [
    {
      value: [],
      type: 'array',
      refinement: 'size',
      path: [],
      branch: [data],
    },
  ],
}
