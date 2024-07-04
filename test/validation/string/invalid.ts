import { Test } from '../../types'
import { string } from '../../../src'

const data = false

export const invalidTest: Test = {
  Struct: string(),
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
}
