import { Test } from '../../types'
import { type, object, assign, string, number } from '../../../src'

const A = type({ a: string() })
const B = object({ a: number(), b: number() })
const data = {
  a: 'invalid',
  b: 2,
  c: 5,
}

export const invalidTypeTest: Test = {
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
  ],
}
