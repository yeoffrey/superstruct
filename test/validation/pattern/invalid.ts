import {Test} from '../../types'
import { string, pattern } from '../../../src'



  {
    value: 'invalid',
    type: 'string',
    refinement: 'pattern',
    path: [],
    branch: [data],
  },
]

export const invalidTest: Test = {
 Struct: pattern(string(), /\d+/),
 data: 'invalid',
 failures: [,
}
