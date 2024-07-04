import { Test } from '../../types'
import { number, min } from '../../../src'

const data = 0

export const invalidExclusiveTest: Test = {
  Struct: min(number(), 0, { exclusive: true }),
  data,
  failures: [
    {
      value: 0,
      type: 'number',
      refinement: 'min',
      path: [],
      branch: [data],
    },
  ],
}
