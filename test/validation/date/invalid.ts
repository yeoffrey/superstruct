import { Test } from '../../types'
import { date } from '../../../src'

const data = 'invalid'

export const invalidTest: Test = {
  Struct: date(),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'date',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
