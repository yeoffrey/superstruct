import { Test } from '../../types'
import { enums } from '../../../src'

const data = 'invalid'

export const invalidStringsTest: Test = {
  Struct: enums(['one', 'two']),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'enums',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
