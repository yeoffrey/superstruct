import {Test} from '../../types'
import { record, string, number } from '../../../src'



  {
    value: 'invalid',
    type: 'record',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]

export const invalidTest: Test = {
 Struct: record(string(), number()),
 data: 'invalid',
 failures: [,
}
