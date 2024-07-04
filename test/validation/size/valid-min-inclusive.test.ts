import { testRunner } from '../../testRunner'
import { string, size } from '../../../src'

export const data = 'a'

export const test = {
  Struct: size(string(), 1, 5),
  data: 'a',
  output: 'a',
  name: 'test/validation/size/valid-min-inclusive',
}

testRunner(test)
