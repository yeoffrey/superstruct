import { testRunner } from '../../testRunner'
import { type, object, assign, string, number } from '../../../src'

const A = type({ a: string() })
const B = object({ b: number() })

export const data = {
  a: '1',
  b: 2,
  c: 3,
}

export const test = {
  Struct: assign(A, B),

  data: {
    a: '1',
    b: 2,
    c: 3,
  },

  output: {
    a: '1',
    b: 2,
    c: 3,
  },

  name: 'test/validation/assign/valid-type',
}

testRunner(test)
