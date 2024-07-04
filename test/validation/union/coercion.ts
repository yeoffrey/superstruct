import { Test } from '../../types'
import { union, string, number, defaulted } from '../../../src'

const A = defaulted(string(), 'foo')
const B = number()

export const coercionTest: Test = {
  Struct: union([A, B]),
  data: undefined,
  output: 'foo',
  create: true,
}
