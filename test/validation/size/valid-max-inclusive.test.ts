import { testRunner } from '../../testRunner'
import { string, size } from '../../../src'

export const data = 'abcde'

export const test = {
  Struct: size(string(), 1, 5),
  data: 'abcde',
  output: 'abcde',
  name: 'test/validation/size/valid-max-inclusive',
}

testRunner(test)
