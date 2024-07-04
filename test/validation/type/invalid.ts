import { Test } from '../../types'
import { type, string, number } from '../../../src'

const data = 'invalid'

export const invalidTest: Test = {
  Struct: type({
    name: string(),
    age: number(),
  }),
  data,
  failures: [
    ,
    {
      value: 'invalid',
      type: 'type',
      refinement: undefined,
      path: [],
      branch: [data],
    },
  ],
}
