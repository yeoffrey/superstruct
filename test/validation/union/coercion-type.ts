import { Test } from '../../types'
import { union, string, number, defaulted, type } from '../../../src'

const A = string()
const B = type({ a: number(), b: defaulted(number(), 5) })

export const coercionTypeTest: Test = {
  Struct: union([A, B]),
  data: { a: 5 },
  output: { a: 5, b: 5 },
  create: true,
}
