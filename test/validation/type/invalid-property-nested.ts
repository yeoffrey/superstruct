import { Test } from '../../types'
import { type, string, number } from '../../../src'

const data = {
  id: 1,
}

export const invalidPropertyNestedTest: Test = {
  Struct: type({
    id: number(),
    person: type({
      name: string(),
      age: number(),
    }),
  }),
  data,
  failures: [
    ,
    {
      value: undefined,
      type: 'type',
      refinement: undefined,
      path: ['person'],
      branch: [data, undefined],
    },
  ],
}
