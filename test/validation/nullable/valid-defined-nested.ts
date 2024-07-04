import { Test } from '../../types'
import { type, string, number, nullable } from '../../../src'

export const validDefinedNestedTest: Test = {
  Struct: type({
    name: nullable(string()),
    age: number(),
  }),
  data: {
    name: 'Jill',
    age: 42,
  },
  output: {
    name: 'Jill',
    age: 42,
  },
}
