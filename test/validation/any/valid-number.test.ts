import { testRunner } from '../../testRunner'
import { any } from '../../../src'

export const data = 1

export const test = {
  Struct: any(),
  data: 1,
  output: 1,
  name: 'test/validation/any/valid-number',
}

testRunner(test)
