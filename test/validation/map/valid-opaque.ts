import { Test } from '../../types'
import { map } from '../../../src'

const data = new Map([
  ['a', 1],
  [2, true],
] as any)

export const validOpaqueTest: Test = {
  Struct: map(),
  data,
  output: data,
}
