import { testRunner } from '../../testRunner'
import { type, string, number, nullable } from '../../../src'

export const data = {
  name: 'Jill',
  age: 42,
}

export const test = {
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

  name: 'test/validation/nullable/valid-defined-nested',
}

testRunner(test)
