import { Test } from '../../types'
import { bigint } from '../../../src'

const data = 3

export const invalidNumberTest: Test = {
  Struct: bigint(),
  data,
  failures: [
    {
      value: 3,
      type: 'bigint',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
