import { Test } from '../../types'
import { number } from '../../../src'

export const validTest: Test = {
  Struct: number(),
  data: 42,
  output: 42,
}
