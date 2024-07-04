import { testRunner } from '../../testRunner'
import { type, string, number } from '../../../src'

export const data = {
  name: 'john',
  age: 42,
}

export const test = {
  Struct: type({
    name: string(),
    age: number(),
  }),

  data: {
    name: 'john',
    age: 42,
  },

  output: data,
  name: 'test/validation/type/valid',
}

testRunner(test)
