import { testRunner } from '../../testRunner'
import { deprecated, number } from '../../../src'

export const data = undefined

export const test = {
  Struct: deprecated(number(), () => {}),
  data: undefined,
  output: undefined,
  name: 'test/validation/deprecated/valid-undefined',
}

testRunner(test)
