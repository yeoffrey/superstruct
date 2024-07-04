import { testRunner } from '../../testRunner'
import { number, array, empty } from '../../../src'

export const data = []

export const test = {
  Struct: empty(array(number())),
  data: [],
  output: [],
  name: 'test/validation/empty/valid-array',
}

testRunner(test)
