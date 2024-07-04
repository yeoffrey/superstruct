import { testRunner } from '../../testRunner'
import { string, trimmed } from '../../../src'

export const data = '  valid  '

export const test = {
  Struct: trimmed(string()),
  data: '  valid  ',
  output: 'valid',
  create: true,
  name: 'test/validation/trimmed/valid',
}

testRunner(test)
