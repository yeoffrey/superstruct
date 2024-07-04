import { Test } from '../../types'
import { enums } from '../../../src'

export const validTest: Test = {
  Struct: enums(['one', 'two']),
  data: 'two',
  output: 'two',
}
