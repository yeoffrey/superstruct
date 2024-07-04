import {Test} from '../../types'
import { number, pick, string, type } from '../../../src'

  type({
    name: string(),
    age: number(),
  }),
  ['name']
)


export const validTypeTest: Test = {
 Struct: pick(,
 data:  {
    name: 'john',
    unknownProperty: true,
    }
, output:  {
    name: 'john',
    unknownProperty: true,
    }
,}
