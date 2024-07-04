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


export const validNestedTest: Test = {
 Struct: omit(,
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
