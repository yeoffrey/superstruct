import { Test } from '../../types'
import { type, string, number, nullable } from '../../../src'

export const validNullNestedTest: Test = {
  Struct: type({
    name: nullable(string()),
    age: number(),
  }),
  data: {
    name: null,
    age: 42,
  },
  output: {
    name: null,
    age: 42,
  },
}
