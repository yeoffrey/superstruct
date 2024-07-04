import { Test } from '../../types'
import { type, string, number } from '../../../src'

const data = {
  name: 'john',
  age: 'invalid',
}

export const invalidPropertyTest: Test = {
  Struct: type({
    name: string(),
    age: number(),
  }),
  data,
  failures: [
    ,
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: ['age'],
      branch: [data, data.age],
    },
  ],
}
