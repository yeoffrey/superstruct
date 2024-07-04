import { testRunner } from '../../testRunner'
import { string, pattern } from '../../../src'

export const data = '123'

export const test = {
  Struct: pattern(string(), /\d+/),
  data: '123',
  output: '123',
  name: 'test/validation/pattern/valid',
}

testRunner(test)
