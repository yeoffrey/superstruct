import { testRunner } from '../../testRunner'
import { number, set, empty } from '../../../src'

export const data = new Set()

export const test = {
  Struct: empty(set(number())),
  data: new Set(),
  output: data,
  name: 'test/validation/empty/valid-set',
}

testRunner(test)
