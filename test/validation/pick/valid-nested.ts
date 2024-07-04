import {Test} from '../../types'
import { pick, object, string } from '../../../src'

  object({
    name: string(),
    address: object({
      street: string(),
      city: string(),
    }),
  }),
  ['address']
)


export const validNestedTest: Test = {
 Struct: pick(,
 data:  {
  address: {
    street: '123 Fake St',
    city: 'Springfield',
    },
    }
, output:  {
  address: {
    street: '123 Fake St',
    city: 'Springfield',
    },
    }
,}
