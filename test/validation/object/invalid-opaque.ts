import { Test } from '../../types'
import { object } from '../../../src'

const data = 'invalid'

export const invalidOpaqueTest: Test = {
  Struct: object(),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'object',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
