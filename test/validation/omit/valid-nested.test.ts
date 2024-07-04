import { testRunner } from '../../testRunner'
import { omit, object, string } from '../../../src'

export const data = {
  address: {
    street: '123 Fake St',
    city: 'Springfield',
  },
}

export const test = {
  Struct: omit(
    object({
      name: string(),
      address: object({
        street: string(),
        city: string(),
      }),
    }),
    ['name']
  ),

  data: {
    address: {
      street: '123 Fake St',
      city: 'Springfield',
    },
  },

  output: {
    address: {
      street: '123 Fake St',
      city: 'Springfield',
    },
  },

  name: 'test/validation/omit/valid-nested',
}

testRunner(test)
