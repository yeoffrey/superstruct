import {Test} from '../../types'
import { partial, object, string, number } from '../../../src'

  object({
    name: string(),
    age: number(),
  })
)


export const composedTest: Test = {
 Struct: partial(,
 data:  {
    name: 'john',
    }
, output:  {
    name: 'john',
    }
,}
