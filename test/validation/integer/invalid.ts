import { Test } from '../../types'
import { integer } from '../../../src'

const data = 'invalid'

export const invalidTest: Test = {
  Struct: integer(),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'integer',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
