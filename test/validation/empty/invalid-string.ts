import { Test } from '../../types'
import { string, empty } from '../../../src'

const data = 'invalid'

export const invalidStringTest: Test = {
  Struct: empty(string()),
  data: 'invalid',
  failures: [
    {
      value: 'invalid',
      type: 'string',
      refinement: 'empty',
      path: [],
      branch: [data],
    },
  ],
}
