import { testRunner } from '../../testRunner'
import { type, object, assign, string, number } from '../../../src'

const A = type({ a: string() })
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
  ],

  name: 'test/validation/assign/invalid-type',
}

testRunner(test)
