import { Test } from '../../types'
import { object, string, number } from '../../../src'

const data = {
  name: 'john',
  age: 42,
  unknown: true,
}

export const invalidPropertyUnknownTest: Test = {
  Struct: object({
    name: string(),
    age: number(),
  }),
  data,
  failures: [
    {
      value: true,
      type: 'never',
      refinement: undefined,
      path: ['unknown'],
      branch: [data, data.unknown],
    },
  ],
}
