import { Test } from '../../types'
import { object, string, number } from '../../../src'

const data = 'invalid'

export const invalidTest: Test = {
  Struct: object({
    name: string(),
    age: number(),
  }),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'object',
      refinement: undefined,
      path: [],
      branch: ['invalid'],
    },
  ],
}
