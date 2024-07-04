import {Test} from '../../types'
import { set, number } from '../../../src'



  {
    value: 'invalid',
    type: 'set',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]

export const invalidTest: Test = {
 Struct: set(number()),
 data: 'invalid',
 failures: [,
}
