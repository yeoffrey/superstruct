import { Test } from '../../types'
import { tuple, string, number } from '../../../src'

const data = [false, 3]

export const invalidElementTest: Test = {
  Struct: tuple([string(), number()]),
  data,
  failures: [
    {
      value: false,
      type: 'string',
      refinement: undefined,
      path: [0],
      branch: [data, data[0]],
    },
  ],
}
