import { testRunner } from '../../testRunner'
import { number } from '../../../src'

export const data = 42

export const test = {
  Struct: number(),
  data: 42,
  output: 42,
  name: 'test/validation/number/valid',
}

testRunner(test)
