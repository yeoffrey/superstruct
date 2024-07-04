import { testRunner } from '../../testRunner'
import { object, assign, string, number } from '../../../src'

const A = object({ a: string() })
const B = object({ a: number(), b: number() })

export const data = {
  a: 'invalid',
  b: 2,
  c: 5,
}

export const test = {
  Struct: assign(A, B),

  data: {
    a: 'invalid',
    b: 2,
    c: 5,
  },

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

  name: 'test/validation/assign/invalid-object',
}

testRunner(test)
