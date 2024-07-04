import { Test } from '../../types'
import { bigint } from '../../../src'

const data = 'invalid'

export const invalidTest: Test = {
  Struct: bigint(),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'bigint',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
