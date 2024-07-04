import { testRunner } from '../../testRunner'
import { string, refine } from '../../../src'

export const data = 'name@example.com'

export const test = {
  Struct: refine(string(), 'email', (value) => value.includes('@')),
  data: 'name@example.com',
  output: 'name@example.com',
  name: 'test/validation/refine/valid',
}

testRunner(test)
