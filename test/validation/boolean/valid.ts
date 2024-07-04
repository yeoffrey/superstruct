import { testRunner } from '../../testRunner'
import { boolean } from '../../../src'

export const data = true

export const test = {
  Struct: boolean(),
  data: true,
  output: true,
  name: 'test/validation/boolean/valid',
}

testRunner(test)
