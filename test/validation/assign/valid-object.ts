import { testRunner } from '../../testRunner'
import { type, assign, string, number } from '../../../src'

const A = type({ a: string() })
const B = type({ a: number(), b: number() })

export const data = {
  a: 1,
  b: 2,
}

export const test = {
  Struct: assign(A, B),

  data: {
    a: 1,
    b: 2,
  },

  output: {
    a: 1,
    b: 2,
  },

  name: 'test/validation/assign/valid-object',
}

testRunner(test)
