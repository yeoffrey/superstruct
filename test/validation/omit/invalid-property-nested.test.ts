import { testRunner } from '../../testRunner'
import { omit, object, string } from '../../../src'

export const data = {
  address: {
    street: 123,
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

  name: 'test/validation/omit/invalid-property-nested',
}

testRunner(test)
