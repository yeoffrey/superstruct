import { Test } from '../../types'
import { type, intersection, string, number } from '../../../src'

const A = type({ a: string() })
const B = type({ b: number() })

export const validTest: Test = {
  Struct: intersection([A, B]),
  data: {
    a: 'a',
    b: 42,
  },
  output: {
    a: 'a',
    b: 42,
  },
}
