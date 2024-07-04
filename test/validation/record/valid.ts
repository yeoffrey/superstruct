import { Test } from '../../types'
import { record, string, number } from '../../../src'

export const validTest: Test = {
  Struct: record(string(), number()),
  data: {
    a: 1,
    b: 2,
  },
  output: {
    a: 1,
    b: 2,
  },
}
