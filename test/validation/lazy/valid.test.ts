import { testRunner } from '../../testRunner'
import { lazy, string } from '../../../src'

export const data = 'two'

export const test = {
  Struct: lazy(() => string()),
  data: 'two',
  output: 'two',
  name: 'test/validation/lazy/valid',
}

testRunner(test)
