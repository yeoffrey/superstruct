import { testRunner } from '../../testRunner'
import { string, size } from '../../../src'

export const data = 'two'

export const test = {
  Struct: size(string(), 1, 5),
  data: 'two',
  output: 'two',
  name: 'test/validation/size/valid-string',
}

testRunner(test)
