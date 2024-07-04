import { testRunner } from '../../testRunner'
import { number, array, size } from '../../../src'

export const data = [1, 2, 3]

export const test = {
  Struct: size(array(number()), 1, 5),
  data: [1, 2, 3],
  output: [1, 2, 3],
  name: 'test/validation/size/valid-array',
}

testRunner(test)
