import { Test } from '../../types'
import { deprecated, string } from '../../../src'

const data = null

export const invalidNullTest: Test = {
  Struct: deprecated(string(), () => {}),
  data,
  failures: [
    {
      value: null,
      type: 'string',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
