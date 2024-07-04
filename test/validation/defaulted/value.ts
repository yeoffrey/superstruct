import { Test } from '../../types'
import { number, defaulted } from '../../../src'

export const valueTest: Test = {
  Struct: defaulted(number(), 42),
  data: undefined,
  output: 42,
  create: true,
}
