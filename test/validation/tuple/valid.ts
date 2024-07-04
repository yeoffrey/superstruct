import { Test } from '../../types'
import { tuple, string, number } from '../../../src'

export const validTest: Test = {
  Struct: tuple([string(), number()]),
  data: ['A', 1],
  output: ['A', 1],
}
