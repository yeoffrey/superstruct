import { testRunner } from '../../testRunner'
import { type, string, number, optional } from '../../../src'

export const data = {
  name: 'Jill',
  age: 42,
}

export const test = {
  Struct: type({
    name: optional(string()),
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

  name: 'test/validation/optional/valid-defined-nested',
}

testRunner(test)
