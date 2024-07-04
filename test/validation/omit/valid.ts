import {Test} from '../../types'
import { omit, object, string, number } from '../../../src'

  object({
    name: string(),
    age: number(),
  }),
  ['age']
)


export const validTest: Test = {
 Struct: omit(,
 data:  {
    name: 'john',
    }
, output:  {
    name: 'john',
    }
,}
