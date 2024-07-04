import {Test} from '../../types'
import { number, optional } from '../../../src'



  {
    value: 'invalid',
    type: 'number',
    refinement: undefined,
    path: [],
    branch: [data],
  },
]

export const invalidTest: Test = {
 Struct: optional(number()),
 data: 'invalid',
 failures: [,
}
