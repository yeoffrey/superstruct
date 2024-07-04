import { testRunner } from '../../testRunner'
import { dynamic, string } from '../../../src'

export const data = 'valid'

export const test = {
  Struct: dynamic(() => string()),
  data: 'valid',
  output: 'valid',
  name: 'test/validation/dynamic/valid',
}

testRunner(test)
