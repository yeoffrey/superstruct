import { testRunner } from '../../testRunner'
import { enums } from '../../../src'

export const data = 'two'

export const test = {
  Struct: enums(['one', 'two']),
  data: 'two',
  output: 'two',
  name: 'test/validation/enums/valid',
}

testRunner(test)
