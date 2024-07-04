import { Test } from '../../types'
import { boolean } from '../../../src'

const data = 'invalid'

export const invalidTest: Test = {
  Struct: boolean(),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'boolean',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
