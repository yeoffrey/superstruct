import { Test } from '../../types'
import { lazy, string } from '../../../src'

const data = 3

export const invalidTest: Test = {
  Struct: lazy(() => string()),
  data,
  failures: [
    {
      value: 3,
      type: 'string',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
