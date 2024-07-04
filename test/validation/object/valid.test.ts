import { testRunner } from '../../testRunner'
import { object, string, number } from '../../../src'

export const data = {
  name: 'john',
  age: 42,
}

export const test = {
  Struct: object({
    name: string(),
    age: number(),
  }),

  data: {
    name: 'john',
    age: 42,
  },

  output: {
    name: 'john',
    age: 42,
  },

  name: 'test/validation/object/valid',
}

testRunner(test)
