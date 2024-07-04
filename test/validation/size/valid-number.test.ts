import { testRunner } from '../../testRunner'
import { number, size } from '../../../src'

export const data = 3

export const test = {
  Struct: size(number(), 1, 5),
  data: 3,
  output: 3,
  name: 'test/validation/size/valid-number',
}

testRunner(test)
