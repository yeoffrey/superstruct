import { testRunner } from '../../testRunner'
import { number, defaulted } from '../../../src'

export const data = undefined

export const test = {
  Struct: defaulted(number(), () => 42),
  data: undefined,
  output: 42,
  create: true,
  name: 'test/validation/defaulted/function',
}

testRunner(test)
