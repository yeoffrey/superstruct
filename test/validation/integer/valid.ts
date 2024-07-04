import { Test } from '../../types'
import { integer } from '../../../src'

export const validTest: Test = {
  Struct: integer(),
  data: 42,
  output: 42,
}
