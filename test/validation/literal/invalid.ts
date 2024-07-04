import { Test } from '../../types'
import { literal } from '../../../src'

const data = false

export const invalidTest: Test = {
  Struct: literal(42),
  data,
  failures: [
    {
      value: false,
      type: 'literal',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
