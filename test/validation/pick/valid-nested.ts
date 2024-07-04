import { testRunner } from '../../testRunner'
import { pick, object, string } from '../../../src'

export const data = {
  address: {
    street: '123 Fake St',
    city: 'Springfield',
  },
}

export const test = {
  Struct: pick(
    object({
      name: string(),
      address: object({
        street: string(),
        city: string(),
      }),
    }),
    ['address']
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

  name: 'test/validation/pick/valid-nested',
}

testRunner(test)
