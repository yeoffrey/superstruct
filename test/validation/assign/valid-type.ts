import { Test } from '../../types'
import { type, object, assign, string, number } from '../../../src'

const A = type({ a: string() })
const B = object({ b: number() })

export const validTypeTest: Test = {
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
}
