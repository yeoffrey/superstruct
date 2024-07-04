import { testRunner } from '../../testRunner'
import { set } from '../../../src'

export const data = new Set(['a', 2, true])

export const test = {
  Struct: set(),
  data: new Set(['a', 2, true]),
  output: new Set(['a', 2, true]),
  name: 'test/validation/set/valid-opaque',
}

testRunner(test)
