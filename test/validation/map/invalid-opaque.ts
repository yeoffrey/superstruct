import { Test } from '../../types'
import { map } from '../../../src'

const data = 'invalid'

export const invalidOpaqueTest: Test = {
  Struct: map(),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'map',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
