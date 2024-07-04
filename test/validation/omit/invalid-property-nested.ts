import {Test} from '../../types'
import { omit, object, string } from '../../../src'

  object({
    name: string(),
    address: object({
      street: string(),
      city: string(),
    }),
  }),
  ['name']
)


export const invalidPropertyNestedTest: Test = {
 Struct: omit(,
 data:  {
  address: {
    street: 123,
    city: 'Springfield',
    },
    }
, failures: [,
    {
    value: 123,
    type: 'string',
    refinement: undefined,
    path: ['address', 'street'],
    branch: [data, data.address, data.address.street],
    },
    ]
}
