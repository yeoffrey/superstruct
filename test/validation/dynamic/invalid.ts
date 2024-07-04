import { Test } from '../../types'
import { dynamic, string } from '../../../src'

const data = 3

export const invalidTest: Test = {
  Struct: dynamic(() => string()),
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
