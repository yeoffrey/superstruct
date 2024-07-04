import {Test} from '../../types'
import { regexp } from '../../../src'



  {
    value: 'invalid',
    type: 'regexp',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]

export const invalidTest: Test = {
 Struct: regexp(),
 data: 'invalid',
 failures: [,
}
