import { Test } from '../../types'
import { string, trimmed } from '../../../src'

const data = false

export const invalidTest: Test = {
  Struct: trimmed(string()),
  data,
  failures: [
    {
      value: false,
      type: 'string',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
  create: true,
}
