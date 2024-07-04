import { testRunner } from '../../testRunner'
import { any } from '../../../src'

export const data = undefined

export const test = {
  Struct: any(),
  data: undefined,
  output: undefined,
  name: 'test/validation/any/valid-undefined',
}

testRunner(test)
