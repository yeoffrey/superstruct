import { testRunner } from '../../testRunner'
import { type, string, number, nullable } from '../../../src'

export const data = {
  name: null,
  age: 42,
}

export const test = {
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

  name: 'test/validation/nullable/valid-null-nested',
}

testRunner(test)
