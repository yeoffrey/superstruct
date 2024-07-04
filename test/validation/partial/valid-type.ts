import {Test} from '../../types'
import { number, partial, string, type } from '../../../src'

  type({
    name: string(),
    age: number(),
  })
)


export const validTypeTest: Test = {
 Struct: partial(,
 data:  {
    name: 'john',
    unknownProperty: true,
    }
, output:  {
    name: 'john',
    unknownProperty: true,
    }
,}
