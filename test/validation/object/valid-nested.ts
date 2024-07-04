import { testRunner } from '../../testRunner'
import { object, string } from '../../../src'

export const data = {
  name: 'john',
  address: {
    street: '123 Fake St',
    city: 'Springfield',
  },
}

export const test = {
  Struct: object({
    name: string(),
    address: object({
      street: string(),
      city: string(),
    }),
  }),

  data: {
    name: 'john',
    address: {
      street: '123 Fake St',
      city: 'Springfield',
    },
  },

  output: {
    name: 'john',
    address: {
      street: '123 Fake St',
      city: 'Springfield',
    },
  },

  name: 'test/validation/object/valid-nested',
}

testRunner(test)
