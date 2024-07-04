import {Test} from '../../types'
import { record, string, number } from '../../../src'



  {
    value: [],
    type: 'record',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]

export const invalidArrayTest: Test = {
 Struct: record(string(), number()),
 data: [],
 failures: [,
}
