import { Test } from '../../types'
import { set } from '../../../src'

export const validOpaqueTest: Test = {
  Struct: set(),
  data: new Set(['a', 2, true]),
  output: new Set(['a', 2, true]),
}
