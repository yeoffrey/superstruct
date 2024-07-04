import {Test} from '../../types'
import { set, number } from '../../../src'



  {
    value: 'b',
    type: 'number',
    refinement: undefined,
    path: ['b'],
    branch: [data, 'b'],
  },
]

export const invalidElementTest: Test = {
 Struct: set(number()),
 data: new Set([1, 'b', 3]),
 failures: [,
}
