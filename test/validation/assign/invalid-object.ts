import { Test } from '../../types'
import { object, assign, string, number } from '../../../src'

const A = object({ a: string() })
const B = object({ a: number(), b: number() })
const data = {
  a: 'invalid',
  b: 2,
  c: 5,
}

export const invalidObjectTest: Test = {
  Struct: assign(A, B),
  data,
  failures: [
    {
      value: 'invalid',
      type: 'number',
      refinement: undefined,
      path: ['a'],
      branch: [data, data.a],
    },
    {
      branch: [data, data.c],
      path: ['c'],
      refinement: undefined,
      type: 'never',
      value: 5,
    },
  ],
}
