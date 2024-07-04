import { testRunner } from '../../testRunner'
import { partial, string, number } from '../../../src'

export const data = {
  name: 'john',
  age: 42,
}

export const test = {
  Struct: partial({
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

  name: 'test/validation/partial/valid-full',
}

testRunner(test)
