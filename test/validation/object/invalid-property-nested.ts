import { Test } from '../../types'
import { object, string } from '../../../src'

const data = {
  name: 'john',
  address: {
    street: 123,
    city: 'Springfield',
  },
}

export const invalidPropertyNestedTest: Test = {
  Struct: object({
    name: string(),
    address: object({
      street: string(),
      city: string(),
    }),
  }),
  data,
  failures: [
    {
      value: 123,
      type: 'string',
      refinement: undefined,
      path: ['address', 'street'],
      branch: [data, data.address, data.address.street],
    },
  ],
}
