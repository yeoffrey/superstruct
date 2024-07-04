import { testRunner } from '../../testRunner'
import { string, empty } from '../../../src'

export const data = ''

export const test = {
  Struct: empty(string()),
  data: '',
  output: '',
  name: 'test/validation/empty/valid-string',
}

testRunner(test)
