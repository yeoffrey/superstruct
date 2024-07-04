import { Test } from '../../types'
import { array } from '../../../src'

const data = 'invalid'

export const invalidOpaqueTest: Test = {
  Struct: array(),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'array',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
