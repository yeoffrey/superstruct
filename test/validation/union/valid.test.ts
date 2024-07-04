import { testRunner } from '../../testRunner'
import { type, union, string, number } from '../../../src'

const A = type({ a: string() })
const B = type({ b: number() })

export const data = {
  a: 'a',
}

export const test = {
  Struct: union([A, B]),

  data: {
    a: 'a',
  },

  output: {
    a: 'a',
  },

  name: 'test/validation/union/valid',
}

testRunner(test)
