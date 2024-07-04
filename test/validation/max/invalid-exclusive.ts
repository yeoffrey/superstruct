import { Test } from '../../types'
import { number, max } from '../../../src'

const data = 0

export const invalidExclusiveTest: Test = {
  Struct: max(number(), 0, { exclusive: true }),
  data,
  failures: [
    {
      value: 0,
      type: 'number',
      refinement: 'max',
      path: [],
      branch: [data],
    },
  ],
}
