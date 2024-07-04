import { testRunner } from '../../testRunner'
import { type, number, deprecated, any } from '../../../src'

export const data = {
  age: 42,
}

export const test = {
  Struct: type({
    name: deprecated(any(), () => {}),
    age: number(),
  }),

  data: {
    age: 42,
  },

  output: {
    age: 42,
  },

  name: 'test/validation/deprecated/valid-property',
}

testRunner(test)
