import { Test } from '../../types'
import { literal } from '../../../src'

export const validTest: Test = {
  Struct: literal(42),
  data: 42,
  output: 42,
}
