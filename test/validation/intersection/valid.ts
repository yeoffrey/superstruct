import { testRunner } from '../../testRunner'
import { type, intersection, string, number } from '../../../src'

const A = type({ a: string() })
const B = type({ b: number() })

export const data = {
  a: 'a',
  b: 42,
}

export const test = {
  Struct: intersection([A, B]),

  data: {
    a: 'a',
    b: 42,
  },

  output: {
    a: 'a',
    b: 42,
  },

  name: 'test/validation/intersection/valid',
}

testRunner(test)
