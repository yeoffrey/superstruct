import { testRunner } from '../../testRunner'
import { type, string, number, optional } from '../../../src'

export const data = {
  age: 42,
}

export const test = {
  Struct: type({
    name: optional(string()),
    age: number(),
  }),

  data: {
    age: 42,
  },

  output: {
    age: 42,
  },

  name: 'test/validation/optional/valid-undefined-nested',
}

testRunner(test)
