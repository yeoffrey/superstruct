import { testRunner } from '../../testRunner'
import { number, set, size } from '../../../src'

export const data = new Set([1, 2, 3])

export const test = {
  Struct: size(set(number()), 1, 5),
  data: new Set([1, 2, 3]),
  output: data,
  name: 'test/validation/size/valid-set',
}

testRunner(test)
