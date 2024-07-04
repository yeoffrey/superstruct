import { Test } from '../../types'
import { enums } from '../../../src'

const data = 'invalid'

export const invalidNumbersTest: Test = {
  Struct: enums([1, 2]),
  data,
  failures: [
    {
      value: data,
      type: 'enums',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
