import { testRunner } from '../../testRunner'
import { any } from '../../../src'

export const data = 'valid'

export const test = {
  Struct: any(),
  data: 'valid',
  output: 'valid',
  name: 'test/validation/any/valid-string',
}

testRunner(test)
