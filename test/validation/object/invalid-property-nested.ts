import { testRunner } from '../../testRunner'
import { object, string } from '../../../src'

export const data = {
  name: 'john',
  address: {
    street: 123,
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
      street: 123,
      city: 'Springfield',
    },
  },

  failures: [
    {
      value: 123,
      type: 'string',
      refinement: undefined,
      path: ['address', 'street'],
      branch: [data, data.address, data.address.street],
    },
  ],

  name: 'test/validation/object/invalid-property-nested',
}

testRunner(test)
