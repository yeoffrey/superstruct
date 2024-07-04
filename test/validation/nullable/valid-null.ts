import { Test } from '../../types'
import { number, nullable } from '../../../src'

export const validNullTest: Test = {
  Struct: nullable(number()),
  data: null,
  output: null,
}
