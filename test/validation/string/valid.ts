import { testRunner } from '../../testRunner'
import { string } from '../../../src'

export const data = 'valid'

export const test = {
  Struct: string(),
  data: 'valid',
  output: 'valid',
  name: 'test/validation/string/valid',
}

testRunner(test)
