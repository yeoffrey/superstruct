import { testRunner } from '../../testRunner'
import { union, string, number, defaulted } from '../../../src'

const A = defaulted(string(), 'foo')
const B = number()

export const data = undefined

export const test = {
  Struct: union([A, B]),
  data: undefined,
  output: 'foo',
  create: true,
  name: 'test/validation/union/coercion',
}

testRunner(test)
