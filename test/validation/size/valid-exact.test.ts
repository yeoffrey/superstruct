import { testRunner } from '../../testRunner'
import { string, size } from '../../../src'

export const data = 'abcd'

export const test = {
  Struct: size(string(), 4),
  data: 'abcd',
  output: 'abcd',
  name: 'test/validation/size/valid-exact',
}

testRunner(test)
