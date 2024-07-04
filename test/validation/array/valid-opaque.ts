import { Test } from '../../types'
import { array } from '../../../src'

export const validOpaqueTest: Test = {
  Struct: array(),
  data: [1, 'b', true],
  output: [1, 'b', true],
}
