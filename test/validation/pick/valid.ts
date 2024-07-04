import {Test} from '../../types'
import { pick, object, string, number } from '../../../src'

  object({
    name: string(),
    age: number(),
  }),
  ['name']
)


export const validTest: Test = {
 Struct: pick(,
 data:  {
    name: 'john',
    }
, output:  {
    name: 'john',
    }
,}
