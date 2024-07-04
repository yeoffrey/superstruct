import { Test } from '../../types'
import { type, assign, string, number } from '../../../src'

const A = type({ a: string() })
const B = type({ a: number(), b: number() })

export const validObjectTest: Test = {
  Struct: assign(A, B),
  data: {
    a: 1,
    b: 2,
  },
  output: {
    a: 1,
    b: 2,
  },
}
