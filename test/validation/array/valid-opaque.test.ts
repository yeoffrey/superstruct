import { testRunner } from '../../testRunner'
import { array } from '../../../src'

export const data = [1, 'b', true]

export const test = {
  Struct: array(),
  data: [1, 'b', true],
  output: [1, 'b', true],
  name: 'test/validation/array/valid-opaque',
}

testRunner(test)
