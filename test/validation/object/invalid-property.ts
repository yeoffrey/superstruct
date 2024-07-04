import { Test } from '../../types'
import { object, string, number } from '../../../src'

const data = {
  name: 'john',
  age: 'invalid',
  height: 2,
}

export const invalidPropertyTest: Test = {
  Struct: object({
    name: string(),
    age: number(),
    height: string(),
  }),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: ['age'],
      branch: [data, data.age],
    },
    {
      value: 2,
      type: 'string',
      refinement: undefined,
      path: ['height'],
      branch: [data, data.height],
    },
  ],
}
