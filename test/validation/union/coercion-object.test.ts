import { testRunner } from '../../testRunner'
import { union, string, number, defaulted, object } from '../../../src'

const A = string()
const B = object({ a: number(), b: defaulted(number(), 5) })

export const data = { a: 5 }

export const test = {
  Struct: union([A, B]),
  data: { a: 5 },
  output: { a: 5, b: 5 },
  create: true,
  name: 'test/validation/union/coercion-object',
}

testRunner(test)
