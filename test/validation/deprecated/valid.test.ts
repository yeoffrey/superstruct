import { testRunner } from '../../testRunner'
import { deprecated, number } from '../../../src'

export const data = 42

export const test = {
  Struct: deprecated(number(), () => {}),
  data: 42,
  output: 42,
  name: 'test/validation/deprecated/valid',
}

testRunner(test)
