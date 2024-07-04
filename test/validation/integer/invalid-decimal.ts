import { Test } from '../../types'
import { integer } from '../../../src'

const data = 3.14

export const invalidDecimalTest: Test = {
  Struct: integer(),
  data,
  failures: [
    {
      value: data,
      type: 'integer',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
