import {Test} from '../../types'
import { omit, type, string, number } from '../../../src'

  type({
    name: string(),
    age: number(),
  }),
  ['age']
)


export const validTypeTest: Test = {
 Struct: omit(,
 data:  {
    name: 'john',
    unknownProperty: 'unknown',
    }
, output:  {
    name: 'john',
    unknownProperty: 'unknown',
    }
,}
