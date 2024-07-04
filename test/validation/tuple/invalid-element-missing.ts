import { Test } from '../../types'
import { tuple, string, number } from '../../../src'

const data = ['A']

export const invalidElementMissingTest: Test = {
  Struct: tuple([string(), number()]),
  data,
  failures: [
    {
      value: undefined,
      type: 'number',
      refinement: undefined,
      path: [1],
      branch: [data, data[1]],
    },
  ],
}
