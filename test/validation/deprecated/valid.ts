import { Test } from '../../types'
import { deprecated, number } from '../../../src'

export const validTest: Test = {
  Struct: deprecated(number(), () => {}),
  data: 42,
  output: 42,
}
